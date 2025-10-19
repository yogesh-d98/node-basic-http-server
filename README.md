🧠 Node.js Learning & Practice Repository

This repository is a complete hands-on learning project for Node.js, covering everything from basic module usage to building servers using both the HTTP module and Express.js.
It demonstrates how Node.js handles file systems, modules, streams, middleware, and routing in a clean, beginner-friendly structure.

📂 Project Structure
node-js-learning/
├─ mock-docs/
│  ├─ about.html
│  ├─ index.html
│  ├─ notfound.html
│  ├─ privacypolicy.html
│  ├─ HugeFile.txt
│  └─ CopyHugeFile.txt
├─ App.js
├─ server.js
├─ Fs.js
├─ streams.js
├─ Modules.js
├─ data.js
├─ hello.js
├─ .gitignore
├─ package.json
├─ package-lock.json
└─ README.md

🚀 Project Overview

This repository serves as a learning playground for understanding Node.js fundamentals and intermediate concepts through practical examples.

Each file focuses on a specific concept:

🟢 1. hello.js

Demonstrates Node.js runtime behavior (no window object like browsers).

Shows use of:

global object

setTimeout and setInterval

__dirname and __filename

🟢 2. data.js

Defines and exports multiple variables using module.exports.

Demonstrates how to export and import data between modules.

🟢 3. Modules.js

Shows how to import from another file using require.

Demonstrates destructuring imports.

Uses Node’s built-in OS module (os.homedir()).

Prints imported data and explores Node’s module system.

🟢 4. Fs.js

Covers the File System (fs) module.

Demonstrates:

Creating and removing directories (fs.mkdir, fs.rmdir)

Reading and writing files (fs.readFile, fs.writeFile)

Deleting files (fs.unlink)

Checking file existence (fs.existsSync)

Emphasizes asynchronous behavior in Node.js.

🟢 5. streams.js

Demonstrates Streams and Piping in Node.js.

Reads and writes large files using createReadStream and createWriteStream.

Shows how to transfer data efficiently between files using:

readStream.pipe(writeStream);

🟢 6. server.js

Builds a custom HTTP server using Node’s built-in http module.

Handles routing manually using req.url.

Serves different HTML files based on the URL (Home, About, Privacy Policy, etc.).

Implements:

Custom 404 page (notfound.html)

Redirects (/home → /)

Response headers and status codes

Uses Lodash for random utilities (_.random()).

🟢 7. App.js

Introduces Express.js for simplified server creation.

Uses Morgan middleware for logging HTTP requests.

Demonstrates:

app.get() routes

Serving static HTML files with res.sendFile()

Redirects with res.redirect()

404 page handling with a catch-all middleware

Highlights the power of middleware and cleaner routing in Express.

🧱 Technologies & Modules Used
Type	Name	Purpose
Core	http	To create the Node server manually
Core	fs	To perform file operations
Core	os	To access system information
Core	stream	To read/write large files efficiently
External	express	Simplified web framework
External	morgan	Middleware logger for Express
External	lodash	Utility library for random & helper functions
⚙️ Setup & Run
1️⃣ Install dependencies
npm install

2️⃣ Start the HTTP server
node server.js


Runs on: http://localhost:4000

3️⃣ Start the Express server
node App.js


or if you use nodemon:

npm run dev

🧠 Concepts Covered

✅ Node.js Core Modules (http, fs, os, stream)
✅ Module Imports/Exports (require, module.exports)
✅ File System Operations (create, read, write, delete)
✅ Streams & Piping for large files
✅ Creating a Web Server from scratch
✅ Routing and Redirects
✅ Express.js basics and Middleware
✅ Morgan for logging
✅ Error Handling and 404 Pages

🧾 .gitignore
/node_modules
.env
.DS_Store
npm-debug.log*

📚 Learning Goal

This repository is part of Yogesh Dhanabalan’s Node.js learning series, built to gain a strong foundation before diving deeper into backend frameworks and MERN stack development.

It connects directly to the learning path:

HTML → React → MERN (Yogigo Project)