import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type='text' placeholder="Aryan Sharma" required/>
                </div>
                <div>
                    <label>Email</label>
                    <input type='email' placeholder="aryansh0004@gmail.com" required/>
                </div>
                <div>
                    <label>Message</label>
                    <input type='text' placeholder="Contact us" required/>
                </div>
                <button type="submit">Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact