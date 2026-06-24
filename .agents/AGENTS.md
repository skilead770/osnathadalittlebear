# Project Rules & Customizations

This file outlines the core guidelines, state, and specific context of the **Osnat Memory Blog** project. Any AGY developer agent resuming work on this repository should adhere to these instructions.

## 1. Project Overview & Aesthetic Guidelines
* **Description**: A premium personal blog built for Osnat, presenting a beautiful day-by-day travel diary/journey across Hebrew and English.
* **Design & Typography**: Uses HSL-tailored colors, smooth gradients, subtle animations, and premium Google fonts:
  * **Hebrew Font**: *Frank Ruhl Libre* (serif) & *Assistant* (sans-serif)
  * **English Font**: *Inter* / *Outfit*
* **Mobile Responsiveness**: Must support beautiful rendering on mobile viewports. Uses custom responsive break-points, RTL text layout, flex/grid wrap, and elegant touch-friendly modals.

## 2. Strict Privacy Guidelines 🚨
* **Anonymous WhatsApp Folder**:
  * Original directory `WhatsApp Chat with Elad Fenigstein` has been permanently renamed to `whatsapp_images`.
  * Original chat log `WhatsApp Chat with Elad Fenigstein.txt` has been permanently renamed to `whatsapp_images/whatsapp_chat.txt`.
  * **Rule**: Under no circumstances should the name "Elad Fenigstein" be introduced back into code, comments, file names, or folder paths. All references must use `whatsapp_images/`.
  * Within `whatsapp_images/whatsapp_chat.txt`, the sender name is anonymized to `"Sender"`.

## 3. Blog Post Image Mapping (Post ID: 4)
The day-by-day diary in `app.js` (`blogPosts[0].days`) maps 12 WhatsApp images chronologically based on textual alignment:
* **Day 1 (כ"ט סיון)**: `IMG-20260624-WA0002.jpg` (בבגאז' ממצפה רמון - מכונית קארטינג)
* **Day 3 (א' תמוז)**: `IMG-20260624-WA0000.jpg` (בחתונת עדו ונועה)
* **Day 4 (ב' תמוז)**: `IMG-20260624-WA0005.jpg` (במעון), `IMG-20260624-WA0007.jpg` (מסיבת סיום במעון)
* **Day 6 (שבת חקת)**: `IMG-20260624-WA0006.jpg` (יום הולדת לילדי חודש תמוז😍)
* **Day 7 (ו' תמוז)**: `IMG-20260624-WA0008.jpg` (קצת מסטולית🤪), `IMG-20260624-WA0001.jpg` (בבגאז' ממעון), `IMG-20260624-WA0003.jpg` (בבגאז' של מקור חיים), `IMG-20260624-WA0004.jpg` (עם הרב דב)
* **Day 9 (ח' תמוז)**: `IMG-20260624-WA0009.jpg` (חוגגת יום הולדת בנאות קדומים), `IMG-20260624-WA0010.jpg` (לא מאמינים שנוסעים פעמיים בשנה לחו"ל🙈), `IMG-20260624-WA0011.jpg` (לא מאמינים שנוסעים פעמיים בשנה לחו"ל🙈)

## 4. Current State & Next Steps
* **Status**: Completed mapping, anonymized user assets, fully verified on local dev server.
* **Git**: Changes fully committed and pushed to `main` branch.
* **Next Steps**: Continue polishing any specific styling requests, add any social sharing details or new posts.
