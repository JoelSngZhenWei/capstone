'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircleIcon, ZapIcon, ShieldIcon, SmileIcon } from 'lucide-react'

export function ChatbotLanding() {
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hello! How can I assist you today?' }
  ])
  const [input, setInput] = useState('')

  const handleSend = (e) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages([...messages, { role: 'user', content: input }])
      setInput('')
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'bot', content: 'Thank you for your message. This is a demo response.' }])
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <header className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">Welcome to ChatBot AI</h1>
        <p className="mt-4 text-xl text-center text-gray-600">Your intelligent conversation partner</p>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MessageCircleIcon, title: '24/7 Availability', description: 'Always here to chat, anytime.' },
              { icon: ZapIcon, title: 'Lightning Fast', description: 'Get instant responses to your queries.' },
              { icon: ShieldIcon, title: 'Secure Conversations', description: 'Your chats are private and protected.' },
              { icon: SmileIcon, title: 'Friendly Interface', description: 'Easy to use for everyone.' }
            ].map((feature, index) => (
              <Card key={index} className="flex flex-col items-center text-center">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Try It Now</h2>
          <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Chat Demo</CardTitle>
            </CardHeader>
            <CardContent className="h-80 overflow-y-auto">
              {messages.map((message, index) => (
                <div key={index} className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                  <span className={`inline-block p-2 rounded-lg ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                    {message.content}
                  </span>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <form onSubmit={handleSend} className="flex w-full gap-2">
                <Input 
                  type="text" 
                  placeholder="Type your message..." 
                  value={input} 
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-grow"
                />
                <Button type="submit">Send</Button>
              </form>
            </CardFooter>
          </Card>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-600">
        <p>&copy; 2023 ChatBot AI. All rights reserved.</p>
      </footer>
    </div>
  )
}