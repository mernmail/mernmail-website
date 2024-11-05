import { features } from "@/constants";

function Features() {
  return (
    <div className="mx-auto px-3 py-12 max-w-screen-xl">
      <h2 className="text-center font-bold text-4xl md:text-5xl hyphens-auto">
        Experience Effortless <span className="text-primary">Email</span>
      </h2>
      <p className="text-center text-xl text-muted-foreground my-5">
        Discover a seamless and intuitive way to manage your inbox with our
        open-source webmail application, powered by the robust MERN stack.
      </p>
      <div className="flex flex-col md:flex-row md:flex-wrap">
        {features.map((feature, index) => (
          <div className="p-4 w-full md:w-1/2 lg:w-1/4" key={index}>
            <div className="bg-card text-card-foreground border-border border w-full h-full rounded-lg px-3 py-6 text-center">
              <h3 className="text-2xl font-bold flex flex-col items-center mb-6">
                {feature.icon}
                <span className="mt-2">{feature.title}</span>
              </h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
