import FAQ from "./FAQ";
import { faqs } from "../../data";

import "./faqs.css"

const FAQs = () => {
  return (
    <section id="faqs" className="faqs__sections">
        <div className="faqs__container container">
          <h2>Frequently Asked Question</h2>
          <p className="font__raleway">
            Here are some questions I usually get. Click to toggle the answer, and if you still
            have some more questions, shoot me a message from the contact section.
          </p>
          <div className="faqs__items" data-aos = "fade-in">
            {
              faqs.map(faq => (
                <FAQ key= {faq.id} faq= {faq}/>
              ))
            }
          </div>
        </div>
    </section>
  )
}

export default FAQs
