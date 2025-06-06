# 📂 Node.js File Management Tool

This project is a simple and lightweight file management system built using Node.js core modules only — no external libraries or frameworks.

## 🚀 Features

- ✅ Create a new file with custom content
- 📖 Read the contents of an existing file
- ❌ Delete a specified file
- 🧰 Uses only Node.js built-in modules: `http`, `fs`, and `path`

## 📁 Project Structure

```

file-manager/
├── files/               # Folder where files will be created/read/deleted
├── fileController.js    # Logic for file operations
├── server.js            # Main HTTP server
└── README.md

````

## 📦 Installation

Clone the repository and navigate into the project directory:

```bash
git clone https://github.com/your-username/file-manager.git
cd file-manager
````

No external dependencies required — everything runs on Node.js core modules.

## 🏁 Usage

Start the server:

```bash
node server.js
```

Server will run at: [http://localhost:3000](http://localhost:3000)

## 🔌 API Endpoints

### 📄 Create a File

* URL: `/create`
* Method: `POST`
* Content-Type: `application/json`
* Body:

```json
{
  "filename": "example.txt",
  "content": "This is a sample file content"
}
```

### 📖 Read a File

* URL: `/read?filename=example.txt`
* Method: `GET`

### ❌ Delete a File

* URL: `/delete?filename=example.txt`
* Method: `DELETE`

## 🛠️ Tech Stack

* Node.js

  * `fs`: file operations
  * `path`: safe path handling
  * `http`: HTTP server
