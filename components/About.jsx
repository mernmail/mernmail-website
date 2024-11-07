import Icon from "@/components/Icon";

function About() {
  return (
    <section className="mx-auto px-7 py-12 max-w-screen-xl">
      <div className="w-full bg-card text-card-foreground border-border border rounded-lg px-4 py-2 flex flex-col-reverse md:flex-row">
        <Icon
          width={160}
          height={160}
          className="self-center p-6 w-full max-w-64 h-auto md:w-36 md:p-0 md:pl-6 shrink-0"
        />
        <div className="grow md:self-center px-4 md:px-8 py-2">
          <h2 className="text-3xl md:text-5xl font-bold my-4">
            About <span className="text-primary">MERNMail</span>
          </h2>
          <p className="text-lg text-muted-foreground my-4">
            MERNMail is a simple, open-source webmail application designed to
            make managing your emails a breeze. Built using the powerful MERN
            stack (MongoDB, Express, React, Node.JS), our application ensures a
            smooth, responsive, and real-time user experience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
