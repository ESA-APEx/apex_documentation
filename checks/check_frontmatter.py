import frontmatter
import sys
from pathlib import Path

from utils import get_staged_files

def check_front_matter(file_path):
    try:
        content = frontmatter.load(file_path)
        if 'title' not in content.metadata:
            print(f"❌ Error: Missing 'title' in front matter of {file_path}")
            return False
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")
        return False
    return True

if __name__ == "__main__":
    all_files_valid = True
    staged_files = get_staged_files()

    for file in staged_files:
        if not check_front_matter(Path(file)):
            all_files_valid = False

    if not all_files_valid:
        sys.exit(1)
