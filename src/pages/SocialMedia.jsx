import { Section, Card } from "../components/ui.jsx";
import  InstagramEmbed from "../components/InstagramEmbed.jsx";

export default function SocialMedia() {
  return (
    <Section title="Instagram Highlight" kicker="Social Media">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <InstagramEmbed
                url="https://www.instagram.com/p/DIJqKZCM6c4/"
                captioned={false}
                />
                <InstagramEmbed
                url="https://www.instagram.com/p/CPEO_HnJZYZ/"  // replace with another post
                captioned={false}
                />
                <InstagramEmbed
                url="https://www.instagram.com/p/Cb-Nkyhvekc/"  // replace with another post
                captioned={false}
                />
        </div>
    </Section>
    );
}
