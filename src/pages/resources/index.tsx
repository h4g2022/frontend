import Image from "next/image";

const employerLinks = [
  "https://www.sgenable.sg/your-first-stop/hiring-employment/employers",
  "https://www.wsg.gov.sg/programmes-and-initiatives/employment-support-for-employers-to-hire-persons-with-disabilities.html",
  "https://www.uschamber.com/workforce/six-things-for-employers-to-consider-when-hiring-individuals-with-disabilities",
];

const talentLinks = [
  "https://www.kdf.org.sg/peritoneal",
  "https://www.kdf.org.sg/haemodialysis",
  "https://www.msf.gov.sg/assistance/Pages/Employment-Assistance-for-Persons-with-Disabilities.aspx",
  "https://www.sgenable.sg/your-first-stop/training-consultancy/enabling-academy/training/persons-with-disabilities",
];

const Index = () => {
  return (
    <div className="section my-8">
      <div className="text-4xl font-semibold">Resources</div>
      <div className="italic mt-2">
        Your one stop platform for talents and employers
      </div>
      <hr className="my-8" />
      <div className="mb-8">
        <div className="text-2xl font-bold mb-6">For Employers</div>
        <Image
          src="/images/employers.jpg"
          alt="Employers"
          width={600}
          height={600}
          style={{ marginBottom: "1rem" }}
        />
        <ol className="flex flex-col gap-y-4 pl-4">
          {employerLinks.map((link, i) => (
            <li className="list-disc" key={i}>
              <a className="hover:underline" href={link}>
                {link}
              </a>
            </li>
          ))}
        </ol>
      </div>
      <div>
        <div className="text-2xl font-bold mb-6">For Talents</div>
        <Image
          src="/images/talent.jpg"
          alt="Talent"
          width={600}
          height={600}
          style={{ marginBottom: "1rem" }}
        />
        <ol className="flex flex-col gap-y-4 pl-4">
          {talentLinks.map((link, i) => (
            <li className="list-disc" key={i}>
              <a className="hover:underline" href={link}>
                {link}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Index;
