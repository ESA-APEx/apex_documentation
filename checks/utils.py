import subprocess


def get_staged_files():
    # Get the list of staged files
    result = subprocess.run(["git", "diff", "--cached", "--name-only", "--diff-filter=ACM"],
                            capture_output=True, text=True)
    files = result.stdout.splitlines()
    return [f for f in files if f.endswith(".md")]
