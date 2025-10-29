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
    <div className="person-card">
      <h4>{name}</h4>
      <p><strong>Gender:</strong> {gender}</p>
      <p><strong>Hair:</strong> {hair}</p>
      <p><strong>Eyes:</strong> {eyes}</p>

      <div className="person-card-meta">
        <div>
          <small>Species</small>
          <ul>{species.length ? species.map((s) => <li key={s}>{s}</li>) : <li>—</li>}</ul>
        </div>

        <div>
          <small>Vehicles</small>
          <ul>
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