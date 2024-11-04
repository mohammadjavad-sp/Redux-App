import { Accordion } from "flowbite-react";
import { t } from "i18next";

const Acordion = () => {
  const fakeContent = [
    {
      id: 1,
      title: t("FAQ.faq1"),
    },
    {
      id: 2,
      title: t("FAQ.faq2"),
    },
    {
      id: 3,
      title: t("FAQ.faq3"),
    },
    {
      id: 4,
      title: t("FAQ.faq4"),
    },
  ];
  return (
    <>
      {fakeContent.map((content) => (
        <Accordion
          style={{ boxShadow: " 0px 3px 18px -7px rgba(209,209,209,1)" }}
          className="!flex flex-col !border-0 mb-1 !rounded-lg dark:!shadow-none dark:bg-dark2"
          collapseAll
        >
          <Accordion.Panel key={content.id} className="">
            <Accordion.Title className="hover:bg-white focus:!ring-0">
              {content.title}
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {t("FAQ.faqText")}
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      ))}
    </>
  );
};

export default Acordion;
