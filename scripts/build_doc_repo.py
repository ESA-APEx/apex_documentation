"""
Build an index of PDFs under ROOT , merging metadata from
sidecar YAML files with the same basename (e.g. Report.pdf -> Report.yml).
Writes doc-index.json
"""

from pathlib import Path
import json
import sys
import argparse
import logging
import yaml

logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")


def load_yaml(yaml_path: Path):
    try:
        with yaml_path.open("r", encoding="utf-8") as f:
            data = yaml.safe_load(f) or {}
            if not isinstance(data, dict):
                logging.warning(
                    "YAML %s did not contain a mapping (object). Ignoring.", yaml_path
                )
                return {}
            return data
    except Exception as e:
        logging.warning("Failed to read YAML %s: %s", yaml_path, e)
        return {}


def build_index(root: Path):
    items = []
    if not root.exists():
        logging.error("Root folder %s does not exist.", root)
        return items

    for project_dir in sorted(p for p in root.iterdir() if p.is_dir()):
        project_name = project_dir.name
        for pdf_path in sorted(project_dir.glob("*.pdf")):
            basename = pdf_path.stem  # filename without suffix
            yaml_path = pdf_path.with_suffix(".yml")

            if not yaml_path.exists():
                logging.warning(
                    f"YAML configuration does not exist for {basename}, skipping"
                )

            else:
                metadata = load_yaml(yaml_path)

                item = {}
                item["project"] = metadata.get("project", project_name)
                item["title"] = metadata.get("title", basename)
                item["filename"] = pdf_path.name
                item["path"] = "/" + str(pdf_path.as_posix())
                tags = metadata.get("tags")
                if isinstance(tags, str):
                    item["tags"] = [t.strip() for t in tags.split(",") if t.strip()]
                elif isinstance(tags, (list, tuple)):
                    item["tags"] = list(tags)
                else:
                    item["tags"] = None
                items.append(item)
                logging.info(f"Indexed: {item['path']}")

    return items


def write_json(items, out_path: Path):
    with out_path.open("w", encoding="utf-8") as f:
        json.dump(items, f, indent=2, ensure_ascii=False)
    logging.info("Wrote %d items to %s", len(items), out_path)


def main(argv):
    p = argparse.ArgumentParser()
    p.add_argument(
        "--root", "-r", default="docs", help="Root folder containing project subfolders"
    )
    p.add_argument("--out", "-o", default="docs/doc-repo.json", help="Output JSON file")
    args = p.parse_args(argv)

    root = Path(args.root)
    items = build_index(root)
    write_json(items, Path(args.out))


if __name__ == "__main__":
    main(sys.argv[1:])
