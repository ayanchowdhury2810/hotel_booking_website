import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import Header from '../../Components/Header';
import './List.css';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../Components/SearchItem';
import useFetch from '../../hooks/useFetch';

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, refetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
  );

  const handleClick = () => {
    refetch();
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="listItem">
              <label>Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(dates[0].startDate, 'MM/dd/yyyy')} to ${format(
                  dates[0].endDate,
                  'MM/dd/yyyy'
                )}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="listItem">
              <label>Options</label>
              <div className="listOptions">
                <div className="listOptionItem">
                  <span className="listOptionText">
                    Min price <small>per night</small>{' '}
                  </span>
                  <input
                    className="listOptionInput"
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                  />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">
                    Max price <small>per night</small>{' '}
                  </span>
                  <input
                    className="listOptionInput"
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                  />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">Adult</span>
                  <input
                    className="listOptionInput"
                    type="number"
                    placeholder={options.adult}
                    min={1}
                  />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">Children</span>
                  <input
                    className="listOptionInput"
                    type="number"
                    placeholder={options.children}
                    min={0}
                  />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">Room</span>
                  <input
                    className="listOptionInput"
                    type="number"
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              'Loading...'
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
