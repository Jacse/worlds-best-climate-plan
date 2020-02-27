import React from 'react';

const Supporter = ({
  image = '',
  name = 'placeholder',
  title = ''
}) => (
  <div className="flex items-center w-full p-4 bg-gray-100 border border-gray-300 rounded-sm">
    <div className="w-12">
      <div
        className="relative h-0 rounded-full overflow-hidden"
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

export default Supporter;
