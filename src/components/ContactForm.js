import React, { useState } from "react"
import axios from "axios"
import ContactModal from "../components/ContactModal"

export default function ContactForm() {
  const initialState = {
    email: "",
    phone: "",
    subject: "",
    message: "",
  }
  const [{ email, phone, subject, message }, setContactState] =
    useState(initialState)
  const [status, setStatus] = useState({})
  const [open, setOpen] = useState(false)

  const handleFormSubmit = e => {
    e.preventDefault()
    axios({
      method: "post",
      url: "http://localhost:8000/api/clixbackend/index.php", //change this to correct endpoint
      headers: { "content-type": "application/json" },
      data: { email, phone, subject, message },
    })
      .then(result => {
        if (result.data.sent) {
          setStatus({
            mailSent: result.data.sent,
          })
          setContactState({ ...initialState })
          setOpen(true)
        } else {
          setStatus({ error: true })
        }
      })
      .catch(error => setStatus({ error: error.message }))
  }

  const onChange = e => {
    const { name, value } = e.target
    setContactState(prevState => ({ ...prevState, [name]: value }))
  }

  const clearState = () => {
    console.log("This is done")
  }

  console.log({ email, phone, subject, message })
  return (
    <>
      <section class="bg-teal-50">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
            Contact Us
          </h2>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?{" "}
            <br />
            Need details about our RoadMap? <br /> Let us know.
          </p>
          <form action="#" class="space-y-8">
            <div class="grid grid-cols-3 gap-4 md:">
              <div class="col-span-2">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="name@clixpesa.com"
                  value={email}
                  name="email"
                  onChange={onChange}
                  required
                />
              </div>
              <div>
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="+254712345678"
                  value={phone}
                  name="phone"
                  onChange={onChange}
                />
              </div>
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Let us know how we can help you"
                value={subject}
                name="subject"
                onChange={onChange}
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
                value={message}
                name="message"
                onChange={onChange}
              />
            </div>
            <button
              type="submit"
              onClick={e => handleFormSubmit(e)}
              class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-teal-700 sm:w-fit hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-primary-300"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
      <ContactModal open={open} setOpen={setOpen} clearState={clearState} />
    </>
  )
}
