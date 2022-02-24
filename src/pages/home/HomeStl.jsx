import React from 'react';
import CardLoader from '../../components/loader/CardLoader';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HomeStl = ({ characters, handleClickCharacters }) => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Home</h1>
      </div>
      {characters.loading ? (
        <CardLoader />
      ) : (
        <>
          <div className="row">
            <div className="col mb-3">
              <button
                className="btn btn-primary float-start"
                type="button"
                style={{ marginLeft: '-10px' }}
                disabled={characters.prev === null}
                onClick={() => handleClickCharacters(characters.prev)}
              >
                <FaChevronLeft />
              </button>
              <button
                className="btn btn-primary float-end"
                type="button"
                disabled={characters.next === null}
                onClick={() => handleClickCharacters(characters.next)}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
          <div className="row row-cols-md-2">
            {characters.data.map((character) => {
              return (
                <div
                  key={character.id}
                  className="card mb-3"
                  style={{ marginRight: '10px', width: '540px' }}
                >
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        style={{ marginLeft: '-12px' }}
                        src={character.image}
                        alt="Character"
                        className="bd-placeholder-img"
                        height="200"
                        width="200"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{character.name}</h5>
                        <p className="card-text">
                          {character.species}
                          <br />
                          {character.gender}
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            {character.origin?.name}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default HomeStl;
