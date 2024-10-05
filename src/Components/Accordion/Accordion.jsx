import { Accordion, theme } from "flowbite-react";

const Acordion = () => {
  const fakeContent = [
    {
      id: 1,
      title: "سوال متدوال شماره یک",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    },
    {
      id: 2,
      title: "سوال متدوال شماره دو",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    },
    {
      id: 3,
      title: "سوال متدوال شماره سه",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    },
    {
      id: 4,
      title: "سوال متدوال شماره چهار",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    },
  ];
  return (
    <>
      {fakeContent.map((content) => (
        <Accordion
          style={{ boxShadow: " 0px 3px 18px -7px rgba(209,209,209,1)" }}
          className="!flex flex-col !border-0 mb-1 !rounded-sm"
          collapseAll
        >
          <Accordion.Panel key={content.id} className="">
            <Accordion.Title className="hover:bg-white focus:!ring-0">
              {content.title}
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {content.text}
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      ))}
    </>
  );
};

export default Acordion;
