import React from 'react';

const Person = ({
  image,
  name,
  title
}) => (
  <div className="flex items-center w-full p-4 bg-gray-100 border border-gray-300 rounded-sm">
    <div className="w-12">
      <div
        className="relative h-0 pb-full rounded-full overflow-hidden"
        style={{ paddingBottom: '100%' }}
      >
        <img
          className="absolute inset-0 h-full object-cover"
          src={`/${image}`}
        />
      </div>
    </div>
    <div className="ml-4">
      <p>{name}</p>
      <p className="text-green-600">{title}</p>
    </div>
  </div>
);

const Logo = ({
  image
}) => (
  <div className="flex items-center w-full p-4 bg-gray-100 border border-gray-300 rounded-sm">
    <img className="w-full h-16 object-contain" src={`/supporters/${image}`} />
  </div>
);

const Supporter = ({
  type,
  image,
  name,
  title
}) => {
  if (type === 'person') {
    return <Person image={image} name={name} title={title} />;
  } else if (type === 'logo') {
    return <Logo image={image} />;
  }
};

export default Supporter;
