import SectionTemplate from "../../components/SectionTamplate.jsx";
import Skills from "../../components/skillsSection.jsx";

export default function SkillsPage() {
  return (
    <SectionTemplate>
      <section className="py-10 bg-gradient-to-br from-gray-50 via-purple-100 to-indigo-100 ">
        <Skills />
      </section>
    </SectionTemplate>
  );
}
