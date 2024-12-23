const values = [
  {
    title: "Sustainability",
    description: "We're committed to environmental stewardship through sustainable farming practices.",
    icon: "🌱"
  },
  {
    title: "Quality",
    description: "We ensure the highest quality organic produce for our customers.",
    icon: "⭐"
  },
  {
    title: "Community",
    description: "We support local farmers and build strong community relationships.",
    icon: "🤝"
  },
  {
    title: "Innovation",
    description: "We embrace innovative farming techniques for better results.",
    icon: "💡"
  }
];

const ValuesSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-primary/10 rounded-2xl p-6
                       hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
              <p className="text-primary/70">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection; 