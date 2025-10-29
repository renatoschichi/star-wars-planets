import React from 'react';

type PersonCardProps = {
  name: string;
  hair: string;
  eyes: string;
  gender: string;
  species?: string[];
  vehicles?: { name: string; model?: string }[];
}

const PersonCard: React.FC<PersonCardProps> = ({ name, hair, eyes, gender, species = [], vehicles = [] }) => {
  return (
    <div className="person-card bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-md dark:shadow-gray-700 transition-colors">
      <h4 className="text-lg font-bold text-gray-900 dark:text-yellow-400">{name}</h4>
      <p className="text-gray-700 dark:text-gray-200"><strong>Gender:</strong> {gender}</p>
      <p className="text-gray-700 dark:text-gray-200"><strong>Hair:</strong> {hair}</p>
      <p className="text-gray-700 dark:text-gray-200"><strong>Eyes:</strong> {eyes}</p>

      <div className="person-card-meta mt-3 flex gap-6">
        <div>
          <small className="text-gray-500 dark:text-gray-400">Species</small>
          <ul className="text-gray-700 dark:text-gray-200">{species.length ? species.map((s) => <li key={s}>{s}</li>) : <li>—</li>}</ul>
        </div>

        <div>
          <small className="text-gray-500 dark:text-gray-400">Vehicles</small>
          <ul className="text-gray-700 dark:text-gray-200">
            {vehicles.length
              ? vehicles.map((v) => <li key={v.name}>{v.name} {v.model ? `— ${v.model}` : ''}</li>)
              : <li>—</li>}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PersonCard;