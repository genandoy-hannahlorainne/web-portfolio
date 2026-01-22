# Hannah Lorainne's Portfolio

A modern personal portfolio website built with Angular 19 featuring a neubrutalism design theme.

## 🎨 Design Theme

- **Style**: Neubrutalism
- **Primary Color**: #9f82ce (Purple)
- **Features**: Bold borders, strong shadows, and vibrant colors

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/          # Navigation bar
│   │   │   ├── about/           # About/Landing section
│   │   │   ├── tech-stack/      # Tech stack showcase
│   │   │   └── projects/        # Projects showcase
│   │   ├── app.ts
│   │   ├── app.html
│   │   └── app.scss
│   ├── assets/
│   │   └── images/
│   │       └── profile.jpg      # Add your profile picture here
│   └── styles.scss              # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Add your profile picture:
   - Place your profile image in `src/assets/images/profile.jpg`

4. Run the development server:
```bash
ng serve
```

5. Open your browser and navigate to `http://localhost:4200`

## 📦 Build for Production

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## 🔗 Social Links

- Instagram: [@hann_.i](https://www.instagram.com/hann_.i/)
- LinkedIn: [Hannah Lorainne Genandoy](https://www.linkedin.com/in/hannah-lorainne-genandoy-3b8a1b2b2/)
- GitHub: [@genandoy-hannahlorainne](https://github.com/genandoy-hannahlorainne)

## 🛠️ Technologies Used

- Angular 19
- TypeScript
- SCSS
- Neubrutalism Design

## 📝 Customization

### Colors
Edit the CSS variables in `src/styles.scss`:
```scss
:root {
  --primary: #9f82ce;
  --primary-dark: #7d5fb3;
  --bg: #fef9f3;
  --text: #1a1a1a;
  --border: #1a1a1a;
}
```

### Content
- **About Section**: Edit `src/app/components/about/about.html`
- **Tech Stack**: Edit `src/app/components/tech-stack/tech-stack.html`
- **Projects**: Edit `src/app/components/projects/projects.html`

## 📄 License

This project is open source and available under the MIT License.
