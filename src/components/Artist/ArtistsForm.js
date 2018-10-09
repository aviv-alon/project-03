import React from 'react';


const ArtistsForm = ({
  handleSubmit,
  handleChange,
  getArtistData,
  artist,
  errors,
  wikiLink,
  wikiImg,
  wikiPar,
  wikiBorn,
  wikiDeath
}) => {
  return(
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className={`input ${errors.name ? 'is-danger' : ''}`}
            name="name"
            placeholder="Name"
            onChange={handleChange}
            onBlur={getArtistData}
            value={artist.name  || ''}
          />
          {errors.name && <small className="help is-danger"> {errors.name} </small>}
        </div>
      </div>

      <div className="field">
        <div className="control">


          <input
            className={`input ${errors.name ? 'is-danger' : ''}`}
            name="image"
            type="hidden"
            placeholder="Image"
            onChange={handleChange}
            value={ wikiImg || ''}
          />
          {errors.image && <small className="help is-danger"> {errors.image} </small>}
        </div>
      </div>
      <div className="section">
        <img src={ wikiImg } alt='upload a photo' height="200" />
      </div>

      <div className="field">
        <label className="label">info</label>
        <p>
          {wikiPar}
        </p>
        <div className="control">
          <input
            className={`input ${errors.name ? 'is-danger' : ''}`}
            name="info"
            placeholder="info"
            onChange={handleChange}
            value={wikiPar || ''}
            type="hidden"
          />
          {errors.info && <small className="help is-danger"> {errors.info} </small>}
        </div>
      </div>

      <div className="field">
        <label className="label">wikiLink</label>
        <div className="control">
          <input
            className={`input ${errors.name ? 'is-danger' : ''}`}
            name="wikiLink"
            placeholder="wikiLink"
            onChange={handleChange}
            value={wikiLink || ''}
          />
          {errors.wikiLink && <small className="help is-danger"> {errors.wikiLink} </small>}
        </div>
      </div>

      <div className="field">
        <label className="label">dateBorn</label>
        <div className="control">
          <input
            className={`input ${errors.name ? 'is-danger' : ''}`}
            name="dateBorn"
            placeholder="Date Born"
            onChange={handleChange}
            value={wikiBorn || ''}
          />
          {errors.wikiLink && <small className="help is-danger"> {errors.wikiLink} </small>}
        </div>
      </div>

      <div className="field">
        <label className="label">dateDeath</label>
        <div className="control">
          <input
            className={`input ${errors.name ? 'is-danger' : ''}`}
            name="dateDeath"
            placeholder="Date Death"
            onChange={handleChange}
            value={wikiDeath || ''}
          />
          {errors.wikiLink && <small className="help is-danger"> {errors.wikiLink} </small>}
        </div>
      </div>

      <button className="button is-primary">Submit</button>
    </form>
  );
};

export default ArtistsForm;
