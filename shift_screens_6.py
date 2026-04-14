import re

filepath = 'index.html'
with open(filepath, 'r') as f:
    content = f.read()

# 1. Increment numbers >= 6 in specific contexts to make room for new screen 6
def increment_match(match):
    prefix = match.group(1)
    num = int(match.group(2))
    suffix = match.group(3)
    if num >= 6:
        return f"{prefix}{num + 1}{suffix}"
    return match.group(0)

patterns = [
    r'(id="screen)([0-9]+)(")',
    r'(id="wscreen)([0-9]+)(")',
    r'(goToScreen\()([0-9]+)(\))',
    r'(goToWebScreen\()([0-9]+)(\))',
    r"(goToScreen\(')([0-9]+)('\))",
    r"(goToWebScreen\(')([0-9]+)('\))",
    r'(navdot-)([0-9]+)(\b)',
    r'(navdot-w)([0-9]+)(\b)',
    r"(syncPickerDot\()([0-9]+)(\))"
]

for pattern in patterns:
    content = re.sub(pattern, increment_match, content)

# 2. Update SCREEN_GROUPS arrays and WEB_SCREENS set
def increment_array_nums(match):
    arr_str = match.group(2)
    def inc_arr(m):
        n = int(m.group(0))
        return str(n + 1) if n >= 6 else str(n)
    new_arr = re.sub(r'\b[0-9]+\b', inc_arr, arr_str)
    return f"{match.group(1)}{new_arr}{match.group(3)}"

content = re.sub(r'(screens:\s*\[)([^\]]+)(\])', increment_array_nums, content)
content = re.sub(r'(const WEB_SCREENS = new Set\(\[)([^\]]+)(\]\))', increment_array_nums, content)

# 3. Standardize step labels to "sur 6"
content = re.sub(r'sur 5', 'sur 6', content)

with open(filepath, 'w') as f:
    f.write(content)

print("Shift complete. Screens >= 6 incremented. Labels updated to 'sur 6'.")
