export const ElementBlock = ({ sn, question, options, element: Comp }) => {
  return (
    <section className={`mt-6  p-2 ${sn === 9 ? 'bg-none' : 'bg-white'} rounded-sm`}>
      <div className="flex border-b py-2">
        <p className="mr-2">{sn}.</p>
        <p>{question}</p>
      </div>
      <Comp question={question} options={options} sn={sn} key={sn} />
    </section>
  );
};
