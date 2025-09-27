import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Calendar, 
  CreditCard, 
  Package, 
  BarChart3, 
  Shield, 
  Users, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Globe,
  Phone,
  Mail,
  MapPin,
  Star,
  ChevronDown,
  ChevronUp,
  Stethoscope,
  Heart,
  Baby,
  Microscope,
  Building2,
  Lock,
  FileText,
  Database,
  Zap,
  MessageSquare,
  CreditCard as PaymentIcon,
  Camera
} from 'lucide-react'
import './App.css'
import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [language, setLanguage] = useState('EN')

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "What are the pricing basics for Sonamak?",
      answer: "Sonamak offers flexible pricing plans tailored for different clinic sizes and needs. Our plans include essential modules like scheduling, billing, and inventory management. Contact our sales team for detailed pricing information specific to your region and requirements."
    },
    {
      question: "Who owns the data and can I export it?",
      answer: "You own all your clinic data. Sonamak provides comprehensive data export capabilities in CSV and PDF formats, ensuring you can access and transfer your information at any time. We never lock you into our platform."
    },
    {
      question: "How does onboarding and data migration work?",
      answer: "Our onboarding process includes dedicated support for data migration from your existing systems. We provide step-by-step guidance, training materials, and technical assistance to ensure a smooth transition with minimal disruption to your operations."
    },
    {
      question: "What support and uptime can I expect?",
      answer: "Sonamak maintains high availability with robust uptime targets. We offer comprehensive support through multiple channels including phone, email, and our help center. Response times vary by plan level and issue severity."
    },
    {
      question: "How does HIPAA compliance and BAA work?",
      answer: "Sonamak provides HIPAA-aligned features including access controls, audit logging, and encryption. Business Associate Agreements (BAA) are available for eligible plans. Compliance ultimately depends on your organizational policies and proper platform configuration."
    },
    {
      question: "Do you support Arabic language and RTL layout?",
      answer: "Yes, Sonamak fully supports Arabic language with proper RTL (right-to-left) layout. Our platform is designed to serve both English and Arabic-speaking healthcare providers with culturally appropriate interfaces and workflows."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">Sonamak</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#product" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Product</a>
              <a href="#solutions" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Solutions</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Pricing</a>
              <a href="#resources" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Resources</a>
              <a href="#company" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Company</a>
              <a href="#trust" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Trust</a>
            </nav>

            {/* Utility Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => setLanguage(language === 'EN' ? 'AR' : 'EN')}
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                {language} | {language === 'EN' ? 'AR' : 'EN'}
              </button>
              <span className="text-sm text-gray-600">ME | USA</span>
              <a href="#login" className="text-sm text-gray-600 hover:text-blue-600">Login</a>
              <Button>Book a Demo</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#product" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Product</a>
              <a href="#solutions" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Solutions</a>
              <a href="#pricing" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Pricing</a>
              <a href="#resources" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Resources</a>
              <a href="#company" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Company</a>
              <a href="#trust" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Trust</a>
              <div className="px-3 py-2">
                <Button className="w-full">Book a Demo</Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Complete Clinic Management Platform for Modern Healthcare
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Operating since January 2019 in the Middle East and launching in the USA since January 2025. HIPAA-aligned features with comprehensive audit trails and access controls.
              </p>
              <div className="text-sm text-gray-500 mb-8">
                HIPAA-aligned features; details in Trust Center.
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Book a Demo
                </Button>
                <Button size="lg" variant="outline">
                  Request BAA Info
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-6">
                <img 
                  src="/src/assets/3E8qZLw4KZdQ.jpg" 
                  alt="Sonamak clinic management dashboard showing patient scheduling, billing overview, and key performance metrics"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Ribbon */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">2019</div>
              <div className="text-sm text-gray-600">Operating Since</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Active Clinics</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">HIPAA</div>
              <div className="text-sm text-gray-600">Aligned</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything Your Clinic Needs in One Platform
            </h2>
            <p className="text-xl text-gray-600">
              Streamline operations, improve patient care, and ensure compliance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <Calendar className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Smart Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Reduce no-shows and optimize appointment flow with intelligent scheduling
                </CardDescription>
                <div className="mt-4 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  Drag-drop calendar, automated reminders, queue management, and multi-provider scheduling with conflict detection.
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <CreditCard className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Financial Clarity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Streamline billing processes and gain clear financial insights
                </CardDescription>
                <div className="mt-4 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  Automated invoicing, insurance claims processing, payment tracking, and comprehensive financial reporting with real-time analytics.
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <FileText className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Clinical Workflows</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive EHR with specialty-specific templates and tools
                </CardDescription>
                <div className="mt-4 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  Digital health records, lab integration, specialty modules for dentistry and oncology, and customizable clinical forms.
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <Shield className="h-12 w-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Security & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  HIPAA-aligned features with robust access controls and audit trails
                </CardDescription>
                <div className="mt-4 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  Role-based access control, comprehensive audit logging, encryption at rest and in transit, and BAA availability.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modules Preview Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Module Suite
            </h2>
            <p className="text-xl text-gray-600">
              Integrated tools designed specifically for healthcare operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <Calendar className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">Scheduling & Calendar</h3>
              <p className="text-sm text-gray-600">Advanced appointment management with drag-drop interface</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <FileText className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold mb-2">EMR/EHR</h3>
              <p className="text-sm text-gray-600">Complete electronic health records with clinical attachments</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <CreditCard className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="font-semibold mb-2">Billing & Claims</h3>
              <p className="text-sm text-gray-600">Automated invoicing with insurance workflow integration</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <Package className="h-8 w-8 text-orange-600 mb-3" />
              <h3 className="font-semibold mb-2">Inventory & Stores</h3>
              <p className="text-sm text-gray-600">Multi-branch stock management with automated reorder alerts</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <BarChart3 className="h-8 w-8 text-indigo-600 mb-3" />
              <h3 className="font-semibold mb-2">Analytics & BI</h3>
              <p className="text-sm text-gray-600">Comprehensive KPI dashboards with exportable reports</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <Users className="h-8 w-8 text-teal-600 mb-3" />
              <h3 className="font-semibold mb-2">Patient Portal</h3>
              <p className="text-sm text-gray-600">Self-service portal for appointments and results access</p>
            </div>
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg">
              See All Modules <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Outcomes & Impact */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proven Results for Healthcare Providers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Reduce Administrative Time by 40%</h3>
              <p className="text-gray-600">Streamlined workflows and automation eliminate repetitive tasks and paperwork.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Improve Patient Satisfaction and Retention</h3>
              <p className="text-gray-600">Better scheduling, reduced wait times, and enhanced communication boost patient experience.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Increase Revenue Through Better Financial Management</h3>
              <p className="text-gray-600">Optimized billing processes and reduced claim denials improve cash flow and profitability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance Snapshot */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8">
            <div className="text-center mb-8">
              <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Security & Compliance You Can Trust
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Sonamak provides HIPAA-aligned features including role-based access controls, comprehensive audit logging, encryption in transit and at rest, and automated backup systems to protect your sensitive healthcare data.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <Lock className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Encryption & Data Protection</h3>
                  <p className="text-sm text-gray-600">End-to-end encryption with secure data transmission and storage</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Role-Based Access Control</h3>
                  <p className="text-sm text-gray-600">Granular permissions and user management with audit trails</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FileText className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Comprehensive Audit Logging</h3>
                  <p className="text-sm text-gray-600">Detailed activity tracking for compliance and security monitoring</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Database className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Business Associate Agreement</h3>
                  <p className="text-sm text-gray-600">BAA available for eligible plans to ensure HIPAA compliance</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">
                View Trust Center
              </Button>
              <Button>
                Request BAA Info
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Specialty Solutions Strip */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Specialized Solutions for Every Practice
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Stethoscope className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Dentistry</h3>
              <p className="text-sm text-gray-600">Specialized tools for dental practices including teeth charts and procedure tracking</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Oncology</h3>
              <p className="text-sm text-gray-600">Advanced oncology workflows with treatment protocols and visit management systems</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Baby className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">OB/GYN</h3>
              <p className="text-sm text-gray-600">Comprehensive women's health modules with prenatal and gynecological care features</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Microscope className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Diagnostic Centers</h3>
              <p className="text-sm text-gray-600">Laboratory and imaging center management with results processing and reporting</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Building2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Multi-Specialty</h3>
              <p className="text-sm text-gray-600">Flexible platform supporting diverse medical specialties within single healthcare organizations</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Integrations & Extensibility */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Connect with your existing tools and services
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
                <MessageSquare className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold">Messaging</h3>
                <p className="text-sm text-gray-600">SMS & Email</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
                <PaymentIcon className="h-12 w-12 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold">Payments</h3>
                <p className="text-sm text-gray-600">Payment Gateways</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
                <Camera className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold">Imaging</h3>
                <p className="text-sm text-gray-600">DICOM & PACS</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
                <Zap className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold">APIs</h3>
                <p className="text-sm text-gray-600">Custom Integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Healthcare Providers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Sonamak has transformed our clinic operations. The scheduling system reduced our no-shows significantly, and the billing module streamlined our revenue cycle management."
              </p>
              <div className="text-sm">
                <div className="font-semibold">Dr. Sarah Ahmed</div>
                <div className="text-gray-500">Clinic Director, Cairo, Egypt</div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The HIPAA-aligned features and audit trails give us confidence in our compliance. The multi-branch support is perfect for our expanding practice network."
              </p>
              <div className="text-sm">
                <div className="font-semibold">Michael Rodriguez</div>
                <div className="text-gray-500">Practice Manager, Miami, USA</div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The Arabic interface and RTL support made adoption seamless for our team. The inventory management has eliminated stockouts and reduced waste significantly."
              </p>
              <div className="text-sm">
                <div className="font-semibold">Dr. Omar Al-Rashid</div>
                <div className="text-gray-500">Medical Director, Dubai, UAE</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <Card key={index} className="p-6">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="mt-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">
              View All FAQs <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of clinics already using Sonamak to streamline operations and improve patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Book a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Sonamak</h3>
              <p className="text-gray-400 text-sm">
                Complete clinic management platform serving healthcare providers since 2019.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Scheduling</a></li>
                <li><a href="#" className="hover:text-white">EMR/EHR</a></li>
                <li><a href="#" className="hover:text-white">Billing</a></li>
                <li><a href="#" className="hover:text-white">Analytics</a></li>
                <li><a href="#" className="hover:text-white">Patient Portal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Dentistry</a></li>
                <li><a href="#" className="hover:text-white">Oncology</a></li>
                <li><a href="#" className="hover:text-white">Multi-Specialty</a></li>
                <li><a href="#" className="hover:text-white">Middle East</a></li>
                <li><a href="#" className="hover:text-white">USA</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
                <li><a href="#" className="hover:text-white">Partners</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Trust & Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">HIPAA</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">BAA</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
              © 2025 Sonamak. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <button 
                onClick={() => setLanguage(language === 'EN' ? 'AR' : 'EN')}
                className="text-sm text-gray-400 hover:text-white"
              >
                {language} | {language === 'EN' ? 'AR' : 'EN'}
              </button>
              <a href="#" className="text-sm text-gray-400 hover:text-white">Status</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

