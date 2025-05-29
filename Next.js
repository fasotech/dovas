```
/* Project Structure
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── HeroSection.js
│   ├── StatsSection.js
│   ├── ServicesSection.js
│   ├── AboutSection.js
│   ├── MissionVisionSection.js
│   ├── CoreValuesSection.js
│   ├── ExpertiseSection.js
│   ├── ContactForm.js
│   ├── FAQSection.js
├── pages/
│   ├── index.js
│   ├── services.js
│   ├── about.js
│   ├── contact.js
│   ├── _app.js
│   ├── _document.js
├── public/
│   ├── images/
│   │   └── (placeholder for images referenced in HTML)
├── styles/
│   ├── globals.css
├── package.json
├── next.config.js
└── tailwind.config.js
*/

### components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">DOVAS TECHNOLOGIES</h1>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link href="/services" className="hover:text-blue-400">Services</Link></li>
          <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
          <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

### components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold">DOVAS TECHNOLOGIES</h3>
          <p>Transforming businesses through advanced data analytics and intelligent automation solutions.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Services</h3>
          <ul>
            <li>Power BI Development</li>
            <li>Excel Automation</li>
            <li>Data Modeling</li>
            <li>Business Intelligence</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Contact Info</h3>
          <p>Phone: +2348162337303</p>
          <p>Email: info@dovastech.com</p>
          <p>Lagos, Nigeria</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>© 2025 DOVAS TECHNOLOGIES. All rights reserved.</p>
      </div>
    </footer>
  );
}

### components/HeroSection.js
export default function HeroSection({ title, subtitle, buttons }) {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-6">{subtitle}</p>
        <div className="space-x-4">
          {buttons.map((btn, index) => (
            <a key={index} href={btn.href} className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-200">{btn.text}</a>
          ))}
        </div>
      </div>
    </section>
  );
}

### components/StatsSection.js
export default function StatsSection({ stats }) {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h3 className="text-3xl font-bold">{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

### components/ServicesSection.js
export default function ServicesSection({ services }) {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border p-6 rounded-lg">
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p>{service.description}</p>
              <ul className="list-disc pl-5">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <p className="mt-4 font-bold">{service.price}</p>
              <a href="/contact" className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Get Quote</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

### components/AboutSection.js
export default function AboutSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About DOVAS TECHNOLOGIES</h2>
        <p className="text-lg mb-4">Transforming businesses through innovative data analytics solutions and cutting-edge business intelligence expertise.</p>
        <h3 className="text-2xl font-bold mb-4">Our Story</h3>
        <p>Founded with a vision to democratize data analytics, DOVAS TECHNOLOGIES emerged from the recognition that every business, regardless of size, deserves access to powerful data insights that drive growth and innovation...</p>
        <p>We began our journey by identifying a critical gap in the market: businesses were drowning in data but starving for insights...</p>
        <p>Today, we stand as a trusted partner to organizations across industries...</p>
        <div className="mt-8">
          <h3 className="text-xl font-bold">Data-Driven Excellence</h3>
          <p>Every solution we create is backed by deep analytical thinking and proven methodologies...</p>
        </div>
      </div>
    </section>
  );
}

### components/MissionVisionSection.js
export default function MissionVisionSection() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Mission & Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold">Our Mission</h3>
            <p>To empower organizations with intelligent data solutions that transform complex information into clear, actionable insights...</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Our Vision</h3>
            <p>To be the leading catalyst in the data analytics revolution...</p>
          </div>
        </div>
      </div>
    </section>
  );
}

### components/CoreValuesSection.js
export default function CoreValuesSection() {
  const values = [
    { icon: '🎯', title: 'Excellence', description: 'We pursue perfection in every project...' },
    { icon: '🤝', title: 'Partnership', description: 'We work alongside our clients...' },
    { icon: '💡', title: 'Innovation', description: 'We continuously explore cutting-edge technologies...' },
    { icon: '🔒', title: 'Integrity', description: 'We maintain the highest standards of data security...' },
    { icon: '⚡', title: 'Agility', description: 'We adapt quickly to changing requirements...' },
    { icon: '📈', title: 'Impact', description: 'We measure our success by the tangible business impact...' },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <span className="text-4xl">{value.icon}</span>
              <h3 className="text-xl font-bold mt-4">{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

### components/ExpertiseSection.js
export default function ExpertiseSection() {
  const expertise = [
    { title: 'Power BI Specialists', description: 'Certified experts in dashboard development...' },
    { title: 'Excel Automation Masters', description: 'Advanced VBA and Power Query developers...' },
    { title: 'Data Architects', description: 'Specialists in data modeling...' },
    { title: 'Business Analysts', description: 'Experts in translating business needs...' },
    { title: 'DAX Developers', description: 'Advanced calculation and measure development...' },
    { title: 'Project Managers', description: 'Certified professionals ensuring on-time delivery...' },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Expertise</h2>
        <p className="text-lg mb-8">Our team combines deep technical expertise with strong business acumen...</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

### components/ContactForm.js
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    service: '',
    budget: '',
    timeline: '',
    details: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API or email service)
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Let's Build Your Data Future Together</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="firstName" placeholder="First Name*" value={formData.firstName} onChange={handleChange} className="border p-2 rounded w-full" required />
            <input type="text" name="lastName" placeholder="Last Name*" value={formData.lastName} onChange={handleChange} className="border p-2 rounded w-full" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="email" name="email" placeholder="Email Address*" value={formData.email} onChange={handleChange} className="border p-2 rounded w-full" required />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="border p-2 rounded w-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} className="border p-2 rounded w-full" />
            <select name="industry" value={formData.industry} onChange={handleChange} className="border p-2 rounded w-full">
              <option value="">Select Industry</option>
              <option value="Technology">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Finance">Finance</option>
              <option value="Retail">Retail</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Education">Education</option>
              <option value="Government">Government</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <select name="service" value={formData.service} onChange={handleChange} className="border p-2 rounded w-full">
            <option value="">Select Service</option>
            <option value="Power BI Development">Power BI Development</option>
            <option value="Excel Automation & VBA">Excel Automation & VBA</option>
            <option value="Advanced DAX & Data Modeling">Advanced DAX & Data Modeling</option>
            <option value="Custom Dashboard Creation">Custom Dashboard Creation</option>
            <option value="Data Migration & Integration">Data Migration & Integration</option>
            <option value="Training & Consulting">Training & Consulting</option>
            <option value="Other">Other</option>
          </select>
          <select name="budget" value={formData.budget} onChange={handleChange} className="border p-2 rounded w-full">
            <option value="">Select Budget Range</option>
            <option value="Under $5,000">Under $5,000</option>
            <option value="$5,000 - $15,000">$5,000 - $15,000</option>
            <option value="$15,000 - $50,000">$15,000 - $50,000</option>
            <option value="$50,000+">$50,000+</option>
            <option value="Ongoing Support Contract">Ongoing Support Contract</option>
          </select>
          <select name="timeline" value={formData.timeline} onChange={handleChange} className="border p-2 rounded w-full">
            <option value="">Select Timeline</option>
            <option value="ASAP (Rush Job)">ASAP (Rush Job)</option>
            <option value="1-2 weeks">1-2 weeks</option>
            <option value="1 month">1 month</option>
            <option value="2-3 months">2-3 months</option>
            <option value="3+ months">3+ months</option>
            <option value="Flexible">Flexible</option>
          </select>
          <textarea name="details" placeholder="Project Details*" value={formData.details} onChange={handleChange} className="border p-2 rounded w-full" required></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send Message</button>
        </form>
      </div>
    </section>
  );
}

### components/FAQSection.js
export default function FAQSection() {
  const faqs = [
    {
      question: 'What types of data analytics projects do you handle?',
      answer: 'We specialize in Power BI dashboard development, Excel automation with VBA, advanced DAX modeling, data visualization, business intelligence solutions, and custom reporting systems...',
    },
    {
      question: 'How long does a typical project take to complete?',
      answer: 'Project timelines vary based on complexity. Simple dashboards can be completed in 1-2 weeks, while comprehensive business intelligence solutions may take 2-3 months...',
    },
    {
      question: 'Do you provide training and ongoing support?',
      answer: 'Yes! We offer comprehensive training sessions for your team and provide ongoing support packages...',
    },
    {
      question: 'What data sources can you work with?',
      answer: 'We work with virtually any data source including Excel files, SQL databases, cloud platforms (Azure, AWS), web APIs, SharePoint, Google Analytics, CRM systems, ERP systems, and more...',
    },
    {
      question: 'How do you ensure data security and confidentiality?',
      answer: 'We follow strict data security protocols including signed NDAs, secure data transfer methods, encrypted storage, and compliance with industry standards...',
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border p-4 rounded">
              <h3 className="text-xl font-bold">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

### pages/index.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';

export default function Home() {
  const stats = [
    { value: '500+', label: 'Dashboards Created' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '2M+', label: 'Data Points Processed' },
    { value: '24/7', label: 'Real-Time Monitoring' },
  ];

  return (
    <div>
      <Header />
      <HeroSection
        title="Transform Data Into Intelligent Decisions"
        subtitle="Unleash the power of advanced analytics, AI-driven insights, and custom dashboards that revolutionize how your business operates and grows."
        buttons={[
          { text: 'Start Your Transformation', href: '/contact' },
          { text: 'Explore Solutions', href: '/services' },
          { text: 'View Portfolio', href: '/portfolio' },
        ]}
      />
      <StatsSection stats={stats} />
      <Footer />
    </div>
  );
}

### pages/services.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';

export default function Services() {
  const services = [
    {
      title: 'Power BI Development & Consulting',
      description: 'Transform your data into powerful, interactive dashboards...',
      features: ['Interactive visualizations', 'Real-time data updates', 'Mobile-responsive design', 'Role-based access control', 'Custom branding'],
      price: 'Starting at $2,500',
    },
    {
      title: 'Data Integration & ETL',
      description: 'Seamlessly connect and transform data from multiple sources...',
      features: ['Multi-source data connection', 'Automated data refresh', 'Data cleansing & transformation', 'Performance optimization', 'Error handling & monitoring'],
      price: 'Starting at $1,800',
    },
    {
      title: 'Power BI Training & Support',
      description: 'Comprehensive training programs to empower your team...',
      features: ['Beginner to advanced courses', 'Hands-on workshop sessions', 'Custom training materials', 'Ongoing technical support', 'Best practices guidance'],
      price: 'Starting at $1,200',
    },
    // Add other services similarly...
  ];

  return (
    <div>
      <Header />
      <ServicesSection services={services} />
      <Footer />
    </div>
  );
}

### pages/about.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import MissionVisionSection from '../components/MissionVisionSection';
import CoreValuesSection from '../components/CoreValuesSection';
import ExpertiseSection from '../components/ExpertiseSection';
import StatsSection from '../components/StatsSection';

export default function About() {
  const stats = [
    { value: '150+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <div>
      <Header />
      <AboutSection />
      <StatsSection stats={stats} />
      <MissionVisionSection />
      <CoreValuesSection />
      <ExpertiseSection />
      <Footer />
    </div>
  );
}

### pages/contact.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import FAQSection from '../components/FAQSection';

export default function Contact() {
  return (
    <div>
      <Header />
      <ContactForm />
      <FAQSection />
      <Footer />
    </div>
  );
}

### pages/_app.js
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

### pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

### styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: Arial, sans-serif;
}

### package.json
{
  "name": "dovas-technologies",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.2.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwindcss": "^3.4.1"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.31"
  }
}

### next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

### tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```