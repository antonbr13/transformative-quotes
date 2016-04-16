(function() {

   angular.module('quoteApp')

   .service('quoteService', function() {

      var quoteBank = [
        {quote:'Democratic theory is concerned with processes by which ordinary citizens exert a relatively high degree of control over leaders.', person: "-Robert Dahl"},

        {quote:"For any form of social activism or feminist practice to represent a form of ethical practice, it must begin by linking the dailiness of an individual’s behavior with her or his more public, formal activity that is engaged in service of others.", person: "-Leela Fernandes"},

        {quote:'That men do not learn very much from the lessons of history is the most important of all the lessons that history has to teach.', person: "-Aldous Huxley"},

        {quote:'Facts do not cease to exist because they are ignored.', person: "-Aldous Huxley"},
        {quote:'You shall know the truth and the truth shall make you mad.', person: "-Aldous Huxley"},

        {quote:"But what then is capital punishment but the most premeditated of murders, to which no criminal's deed, however calculated it may be, can be compared? For there to be equivalence, the death penalty would have to punish a criminal who had warned his victim of the date at which he would inflict a horrible death on him and who, from that moment onward, had confined him at his mercy for months. Such a monster is not encountered in private life.", person: "-Albert Camus"},

        {quote:'An execution is not simply death. It is just as different from the privation of life as a concentration camp is from prison. It adds to death a rule, a public premeditation known to the future victim, an organization which is itself a source of moral sufferings more terrible than death.', person: "-Albert Camus"},

        {quote:'I stand proud, but I never said my pledge allegiance', person: "-Capital Steez"},

        {quote:'We should do away with the absolutely specious notion that everybody has to earn a living. It is a fact today that one in ten thousand of us can make a technological breakthrough capable of supporting all the rest. The youth of today are absolutely right in recognizing this nonsense of earning a living. We keep inventing jobs because of this false idea that everybody has to be employed at some kind of drudgery because, according to Malthusian Darwinian theory he must justify his right to exist. So we have inspectors of inspectors and people making instruments for inspectors to inspect inspectors. The true business of people should be to go back to school and think about whatever it was they were thinking about before somebody came along and told them they had to earn a living.', person: "-R. Buckminster Fuller"},

        {quote: "We are not going to be able to operate our Spaceship Earth successfully nor for much longer unless we see it as a whole spaceship and our fate as common. It has to be everybody or nobody.", person: "-R. Buckminster Fuller"},


        {quote: "If humanity does not opt for integrity we are through completely. It is absolutely touch and go. Each one of us could make the difference.", person: "-R. Buckminster Fuller"},

        {quote: "War is the ultimate tool of politics.", person: "-R. Buckminster Fuller"},

        {quote: "God, to me, it seems, is a verb not a noun, proper or improper.", person: "-R. Buckminster Fuller"},

        {quote: "Today, more than ever before, life must be characterized by a sense of Universal responsibility, not only nation to nation and human to human, but also human to other forms of life.", person: "-Dalai Lama"},

        {quote: "I am increasingly convinced that the time has come to find a way of thinking about spirituality and ethics beyond religion altogether.", person: "-Dalai Lama"},

        {quote: "Economic powers continue to justify the current global system where priority tends to be given to speculation and the pursuit of financial gain. As a result, what is fragile, like the environment, is defenseless before the interests of the deified market, which become the only rule.", person: "-Pope Francis"},

        {quote: "We need to strengthen the conviction that we are one single human family.", person: "-Pope Francis"},

         // {quote: "", person: "-"},
         //
         // {quote: "", person: "-"},
         //
         // {quote: "", person: "-"},
         //
         // {quote: "", person: "-"},
         //
         // {quote: "", person: "-"},
         //
         // {quote: "", person: "-"},
         //
         // {quote: "", person: "-"},
         //
         // {quote: "", person: "-"},
         //
         // {quote: "", person: "-"},
         //
         // {quote: "", person: "-"},
         //
         // {quote: "", person: "-"},
         //
         // {quote: "", person: "-"},
         // {quote: "", person: "-"},
         // {quote: "", person: "-"},
         // {quote: "", person: "-"},
         // {quote: "", person: "-"},
         // {quote: "", person: "-"},
         // {quote: "", person: "-"},
         // {quote: "", person: "-"},
         // {quote: "", person: "-"}
      ];




      this.random = function() {
        var text =[];

        text = quoteBank[Math.floor(Math.random() * quoteBank.length)];
        console.log(text);
        return text;
      }




   });




}());
