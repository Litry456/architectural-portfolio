export default function Contact() {
    return (
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Contact Me</h1>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Name</label>
              <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Message</label>
              <textarea id="message" name="message" required className="w-full px-3 py-2 border rounded-md" rows={4}></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Send Message</button>
          </form>
        </div>
      </div>
    )
  }
  
  