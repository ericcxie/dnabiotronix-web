const News: React.FC = () => {
  return (
    <section className="w-full px-4 py-24 mx-auto max-w-4xl md:w-2/3 lg:w-3/4">
      <div className="text-left md:text-center">
        <h2 className="text-5xl font-extrabold leading-tight text-gray-900">
          Latest News
        </h2>
      </div>
      <div className="flex flex-col space-y-12 divide-y divide-gray-200">
        {/* Repeat this div for each news item */}
        <div>
          <p className="pt-5 mb-3 text-sm font-normal text-gray-500">
            November 9, 2023
          </p>
          <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
            <a
              href="https://news.asu.edu/20231109-asu-startup-dna-biotronix-wins-grand-prize-skysong-innovations-startup-challenge#:~:text=DNA%20Biotronix%20won%20the%20challenge,sweat%20at%20the%20molecular%20level"
              className="text-gray-900 hover:text-theme-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              ASU startup DNA Biotronix wins grand prize in Skysong Innovations
              Startup Challenge
            </a>
          </h2>
          <p className="mb-4 text-base font-normal text-gray-600">
            An Arizona State University startup is one step closer to developing
            tiny, noninvasive wearable devices to measure real-time glucose
            levels in sweat after winning Skysong Innovations’ 2023 Startup
            Challenge...
          </p>
          <a
            href="https://news.asu.edu/20231109-asu-startup-dna-biotronix-wins-grand-prize-skysong-innovations-startup-challenge#:~:text=DNA%20Biotronix%20won%20the%20challenge,sweat%20at%20the%20molecular%20level"
            className="inline-flex items-center px-6 py-3 text-gray-200 bg-theme-blue-600 rounded-xl hover:bg-theme-blue-700 hover:text-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Continue Reading
          </a>
        </div>
        {/* End repeat */}
      </div>
    </section>
  );
};

export default News;
