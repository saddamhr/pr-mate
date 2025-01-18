# PR Mate
<img width="1507" alt="Screenshot 2025-01-18 at 7 33 20 PM" src="https://github.com/user-attachments/assets/dacab1ed-6fa3-41a5-9092-047d00298c50" />


A customizable AI-powered application to streamline your daily workflows. This app automates tasks such as generating ticket details (branch names, PR descriptions, and commit messages). It leverages modern technologies like React, Node.js, and the Ollama AI model.

## Features

- **AI-Powered Ticket Generator**: Automate the creation of branch names, PR descriptions, and commit messages.
- **Customizable AI Model**: Use the Ollama AI model for natural language processing tasks.
- **Interactive Typing Effect**: Experience a smooth typing animation for generated results.
- **User-Friendly UI**: Built with React for an intuitive frontend.

---

## Tech Stack

### Client
- **React**: For building an interactive and dynamic UI.
- **CSS**: For styling the application.

### Server
- **Node.js**: For building the backend API.
- **Express**: A lightweight and flexible Node.js framework.
- **Ollama**: For AI-based text generation.
- **Axios**: For making HTTP requests.

---

## Getting Started

### Prerequisites

1. **Node.js** (v16 or higher)
2. **npm** (comes with Node.js)
3. **Ollama AI Model**: Ensure the required model is available on your machine.

---

### Installation

#### Clone the Repository
```bash
git clone https://github.com/your-username/pr-mate.git
cd pr-mate
```

#### Install Dependencies

**For the Server:**
```bash
cd server
npm install
```

**For the Client:**
```bash
cd client
npm install
```

---

### Environment Variables

Create `.env` files in both the `server` and `client` directories.

**Server `.env`**
```env
PORT=5001
OLLAMA_MODEL=llama3.2
```

**Client `.env`**
```env
REACT_APP_API_BASE_URL=http://localhost:5001/api
```

---

### Running the Application

**Start the Server:**
```bash
cd server
npm run dev
```

**Start the Client:**
```bash
cd client
npm start
```

---

### API Endpoints

#### 1. **Generate Ticket Details**
- **URL**: `/api/generate`
- **Method**: `POST`
- **Body**: 
  ```json
  {
    "title": "Short description of the ticket"
  }
  ```
- **Response**:
  ```json
  {
    "data": "Here is the generated output based on the ticket title \"BUG-445: Resolve issue with image rendering on mobile devices\":\n\n  - Branch Name: bug-fix/4465\n  - PR Description:\n    In this pull request, we will resolve the issue with image rendering on mobile devices (BUG-445). The current implementation fails to render images correctly due to an incorrect width and height calculation. We will implement a new solution that uses responsive image sizes to ensure correct rendering regardless of device size or screen resolution.\n  - Commit Message:\n    \"Resolve BUG-445: Fix image rendering issue on mobile devices by using responsive image sizes\"",
    "status": 200,
    "statusText": "OK",
    "headers": {
        "content-length": "655",
        "content-type": "application/json; charset=utf-8"
    },
    "config": {
        "transitional": {
            "silentJSONParsing": true,
            "forcedJSONParsing": true,
            "clarifyTimeoutError": false
        },
        "adapter": [
            "xhr",
            "http",
            "fetch"
        ],
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "env": {},
        "headers": {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },
        "method": "post",
        "url": "http://localhost:5001/api/generate",
        "data": "{\"title\":\"BUG-445: Resolve issue with image rendering on mobile devices\"}"
    },
    "request": {}
  }
  ```

---

### Customization

- **AI Model**: Update the Ollama AI model in the `.env` file in the server directory.
- **API Endpoints**: Modify or extend the backend routes as needed.
- **Styling**: Customize the UI styles in the `client/src` directory.

---

## Demo & Screenshot

https://github.com/user-attachments/assets/7f71b2ba-8a01-4941-9a79-4e2684d7a261


## Contribution

Contributions are welcome! Follow the steps below:
1. Fork the repository.
2. Create a new branch for your feature/fix.
3. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
