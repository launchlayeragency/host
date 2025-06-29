

export default function WhmcsNewsSection() {

  const announcements = [
    {
      date: "March 05",
      tag: "Thank you for choosing WHMCS!",
      content: "Welcome to WHMCS! You have made a great choice and we want to help you get up and running as quickly as possible. This is a sample announcement. Announcements are a great way to keep your customers informed about news and special offers. You can edit or delete this announcement by logging into the admin area and navigating to Support > ..."
    },
    {
      date: "March 05",
      tag: "Black friday offer",
      content: "You have made a great choice and we want to help you get up and running as quickly as possible. This is a sample announcement. Announcements are a great way to keep your customers informed about news and special offers. You can edit or delete this announcement by logging into the admin area and navigating to Support > ..."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="w-[85%] mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-left">NEWS</h2>
        
        {announcements.map((announcement, index) => (
          <div key={index} className="mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <span className="bg-stone-500 text-white px-3 py-2 rounded-md text-base md:text-xl">
                {announcement.date}
              </span>
              {/* <span className="text-blue-600 hover:text-teal-400 text-xl font-bold transition-colors duration-300  ">
                {announcement.tag}
              </span> */}
               <button className="text-blue-600 hover:text-teal-400 text-xl font-bold transition-colors duration-300"
                            onClick={() => {
                                document.getElementById('whmcs')?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}
                        >
                            {announcement.tag}
                        </button>
            </div>
            <div className="bg-slate-200 border-l-4 border-blue-500 py-6 px-8 md:px-10 text-gray-700  text-base md:text-lg">
              {announcement.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

