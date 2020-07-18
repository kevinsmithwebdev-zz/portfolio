import React from 'react';

interface PropsInterface {
  data: {
    text: string,
    list: Array<string>,
  },
}

const renderSkill = (label: string) => (
  <span key={ label }>{ label }</span>
);


const SkillsSection: React.SFC<PropsInterface> = ({ data: { text, list } }) => {
  console.log('asdf4', list);
  return (
    <div>
      <h3>{ text }</h3>
      { list.map(renderSkill) }
    </div>
  );
};

export default SkillsSection;
