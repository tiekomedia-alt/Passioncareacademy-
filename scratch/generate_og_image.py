from PIL import Image, ImageDraw, ImageFont
import os

# Create 1200x630 canvas
width, height = 1200, 630
canvas = Image.new("RGB", (width, height), color="#0F172A") # Navy dark background

# Load facility image as right half background
facility_img_path = r"c:\Users\HP\Desktop\PASSION CARE\public\hero-playground.jpg"
if os.path.exists(facility_img_path):
    facility_img = Image.open(facility_img_path).convert("RGB")
    # Resize & crop to fill right side 650x630
    f_w, f_h = facility_img.size
    target_w, target_h = 700, 630
    ratio = max(target_w / f_w, target_h / f_h)
    new_size = (int(f_w * ratio), int(f_h * ratio))
    facility_resized = facility_img.resize(new_size, Image.Resampling.LANCZOS)
    
    # Crop center
    left = (facility_resized.width - target_w) // 2
    top = (facility_resized.height - target_h) // 2
    cropped = facility_resized.crop((left, top, left + target_w, top + target_h))
    
    canvas.paste(cropped, (500, 0))

# Load logo
logo_path = r"c:\Users\HP\Desktop\PASSION CARE\public\logo.png"
if os.path.exists(logo_path):
    logo = Image.open(logo_path).convert("RGBA")
    logo.thumbnail((240, 240), Image.Resampling.LANCZOS)
    
    # Create white circle backdrop for logo
    logo_bg = Image.new("RGBA", (220, 220), (255, 255, 255, 255))
    mask = Image.new("L", (220, 220), 0)
    draw_mask = ImageDraw.Draw(mask)
    draw_mask.ellipse((0, 0, 220, 220), fill=255)
    
    canvas.paste(logo_bg, (60, 60), mask)
    
    # Center logo on circle
    l_x = 60 + (220 - logo.width) // 2
    l_y = 60 + (220 - logo.height) // 2
    canvas.paste(logo, (l_x, l_y), logo)

draw = ImageDraw.Draw(canvas)

# Create left side gradient overlay over image
for x in range(450, 650):
    alpha = int(255 * (1 - (x - 450) / 200))
    # Fill vertical strip
    draw.line([(x, 0), (x, 630)], fill=(15, 23, 42))

# Load fonts
try:
    font_title = ImageFont.truetype("arialbd.ttf", 46)
    font_tagline = ImageFont.truetype("arial.ttf", 26)
    font_badge = ImageFont.truetype("arialbd.ttf", 20)
    font_contact = ImageFont.truetype("arialbd.ttf", 22)
except:
    font_title = ImageFont.load_default()
    font_tagline = ImageFont.load_default()
    font_badge = ImageFont.load_default()
    font_contact = ImageFont.load_default()

# Text details
draw.rectangle([60, 310, 320, 345], fill="#0284C7")
draw.text((75, 317), "BEAR, DELAWARE", fill="#FFFFFF", font=font_badge)

draw.text((60, 365), "PASSION CARE", fill="#FFFFFF", font=font_title)
draw.text((60, 415), "ACADEMY", fill="#FACC15", font=font_title)

draw.text((60, 480), "Early Education & Childcare Center", fill="#94A3B8", font=font_tagline)
draw.text((60, 515), "\"We Are Your Extended Family\"", fill="#E2E8F0", font=font_tagline)

draw.text((60, 565), "Call for Tour: (302) 832-2622", fill="#4ADE80", font=font_contact)

output_path = r"c:\Users\HP\Desktop\PASSION CARE\public\og-image.jpg"
canvas.save(output_path, "JPEG", quality=95)
print(f"Generated 1200x630 OG Image at {output_path}")
