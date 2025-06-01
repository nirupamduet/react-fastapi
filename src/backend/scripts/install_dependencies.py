import subprocess
import os
import sys

def main():
    # Go up to the project root (2 levels above this script)
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.abspath(os.path.join(script_dir, "..", ".."))

    # Paths to the venv and requirements.txt
    venv_python = os.path.join(project_root, ".venv", "Scripts", "python.exe")
    requirements_path = os.path.join(project_root, "backend", "requirements.txt")

    if not os.path.exists(venv_python):
        print("❌ Could not find virtual environment at:")
        print(f"   {venv_python}")
        print("Please create one using: python -m venv .venv")
        sys.exit(1)

    if not os.path.exists(requirements_path):
        print(f"❌ Could not find requirements.txt at: {requirements_path}")
        sys.exit(1)

    print("📦 Installing packages from requirements.txt...\n")
    subprocess.run([venv_python, "-m", "pip", "install", "-r", requirements_path], check=True)

    print("\n✅ All dependencies installed successfully.")

if __name__ == "__main__":
    main()
