
# Eventura <a href="https://evently-event-management-nextjs-lime.vercel.app/" target="_blank">🔗</a>
![Lighthouse Review Score](https://github.com/Rahulcheryala/Eventura/blob/main/public/assets/images/Lighthouse.png?raw=true)

Welcome to Eventura, your ultimate solution for seamless event hosting and management. This ReadMe will guide you through the project's tech stack, features, and steps to get started.

## ⚙️ Tech Stack 👩‍💻

- Node.js
- Next.js
- TypeScript
- TailwindCSS
- Stripe
- Zod
- React Hook Form
- Shadcn
- uploadthing

Eventura utilizes <span style="color: #68a063;">**Node.js**</span> for building the server-side of the application, and <span style="color: #000000;">**Next.js**</span> for enabling server-side rendering and static site generation. <span style="color: #007acc;">**TypeScript**</span> is used to add static typing, enhancing code quality and maintainability. The design is crafted with <span style="color: #38bdf8;">**TailwindCSS**</span>, a utility-first CSS framework. <span style="color: #635bff;">**Stripe**</span> is integrated for handling secure payment transactions. <span style="color: #3068b7;">**Zod**</span> is employed for schema declaration and validation to ensure data integrity. <span style="color: #ec5990;">**React Hook Form**</span> manages form states and validation efficiently in our React components. <span style="color: #00aeef;">**Shadcn**</span> aids in building interactive user interfaces, and <span style="color: #ff4f00;">**uploadthing**</span> handles file uploads seamlessly. User authentication is managed by <span style="color: #6c47ff;">**Clerk**</span>, ensuring secure and efficient user management.

## 🔋➕ Features

### ♦️ Authentication (CRUD) with Clerk
User management through Clerk ensures secure and efficient authentication.

### ♦️ Events (CRUD)
Comprehensive functionality for creating, reading, updating, and deleting events, giving users full control over event management.
- **Create Events:** Users can effortlessly generate new events, providing essential details such as title, date, location, and additional information.
- **Read Events:** Seamless access to a detailed view of all events, allowing users to explore event specifics, including descriptions, schedules, and related information.
- **Update Events:** Empowering users to modify event details dynamically, ensuring that event information remains accurate and up-to-date.
- **Delete Events:** A straightforward process for removing events from the system, giving administrators the ability to manage and curate the platform effectively.

### ♦️ Related Events
Smartly connects events that are related and displays them on the event details page, making it more engaging for users.

### ♦️ Organized Events
Efficient organization of events, ensuring a structured and user-friendly display for the audience, such as showing events created by the user on the user profile.

### ♦️ Search & Filter
Empowering users with a robust search and filter system, enabling them to easily find the events that match their preferences.

### ♦️ New Category
Dynamic categorization allows for the seamless addition of new event categories, keeping your platform adaptable.

### ♦️ Checkout and Pay with Stripe
Smooth and secure payment transactions using Stripe, enhancing user experience during the checkout process.

### ♦️ Event Orders
Comprehensive order management system, providing a clear overview of all event-related transactions.

### ♦️ Search Orders
Quick and efficient search functionality for orders, facilitating easy tracking and management.

...and many more features, including code architecture and reusability.

## 🪭 Quick Start

Follow these steps to set up the project locally on your machine.

### 🎢 Prerequisites

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Cloning the Repository

```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```

**Installation** 🕹️

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables** 🧩

Create a new file named `.env` in the root of your project and add the following content:

```env
#NEXT
NEXT_PUBLIC_SERVER_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_CLERK_WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

#MONGODB
MONGODB_URI=

#UPLOADTHING
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

Replace the placeholder values with your actual credentials 

**Running the Project**

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
