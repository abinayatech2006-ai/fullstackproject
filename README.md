🥗 Food Expiry Management System

🌟 Project Overview
The Food Expiry Management System is a simple, interactive web app that helps track your food items and their expiry dates.
View items in a color-coded table
Quickly identify which food is expired, expiring soon, or fresh
Delete items you no longer need
Works completely offline using localStorage

🛠 Features
Feature	Description
🆕 Add Food Items	Enter food name & expiry date
📊 Table View	View all food items in a structured table
🔴 Red Row	Expired items
🟠 Orange Row	Expiring soon (≤2 days)
🟢 Green Row	Fresh items
🗑 Delete	Remove any food item from the list
💾 Offline Storage	Data saved in browser storage automatically

🚀 How to Run Locally
Clone the repository
git clone <your-github-repo-url>
Open the project folder in VS Code
Open index.html in any browser
Or use Live Server in VS Code for auto-refresh
Enter Food Name and Expiry Date → Click Add Food
Food items will appear in the table with colored status
Click Delete to remove any item

🧩 Table Layout Example
Food Name	Expiry Date	Status	Action
Milk	2026-03-31	🟠 Expiring Soon	Delete
Eggs	2026-04-05	🟢 Fresh	Delete
Yogurt	2026-03-28	🔴 Expired	Delete

✅ Rows automatically change color based on expiry status

⚙️ Technologies Used
HTML – Page structure & input fields
CSS – Styling table, buttons, and color-coded rows
JavaScript – Handles adding, deleting, displaying foods, and calculating expiry status
localStorage – Stores all data in browser for persistence

 How It Works
User adds food name and expiry date
JavaScript calculates difference between today and expiry date
Sets status:
diff < 0 → Expired 🔴
diff <= 2 → Expiring Soon 🟠
diff > 2 → Fresh 🟢
Displays food in table row with corresponding background color
User can delete any row, which updates localStorage automatically

📌 Notes
Fully frontend-based, no backend required
Works completely offline
Automatically updates expiry status daily

✨ Future Enhancements
Add search and filter for quick lookup
Add sorting by expiry date
Integrate backend + database for permanent storage
Make mobile responsive dashboard
Add notifications for expiring foods
, visually attractive, and unique. 
