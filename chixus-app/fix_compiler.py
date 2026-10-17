  
import os

file_path = os.path.join("src", "App.tsx")

if not os.path.exists(file_path):
    print(f"❌ Error: Could not find {file_path}. Make sure you are in the chixus-app directory!")
    exit(1)

with open(file_path, "r", encoding="utf-8") as f:
    code = f.read()

# The target patch snippet to insert the missing interface keys programmatically
missing_properties = "\n      meshLinksCount: 0,\n      experiences: [],"

# Locate the peer updates and inject properties securely right after recentInspections
search_trigger = "recentInspections: []"
if search_trigger in code:
    code = code.replace(search_trigger, f"{search_trigger},{missing_properties}")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(code)
    print("✅ Success! CHIXUS profile compilation nodes patched beautifully.")
else:
    print("⚠️ Notice: Target profile signatures are already updated or modified.")
