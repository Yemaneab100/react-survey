import { useState } from 'react'

function Main({ initialFormState, formState, setFormState }) {
  //const [open, setOpen] = useState(false); //Ignore this state

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submited', formState)
    setFormState(initialFormState)
  }

  const handleChange = (event) => {
    const targetValue = event.target.value
    const targetName = event.target.name
    const targetType = event.target.type
    const targetChecked = event.target.value

    if (targetName === 'name') {
      setFormState({ ...formState, fullName: targetValue })
    }
    if (targetName === 'consistency') {
      setFormState({ ...formState, consistency: targetValue })
    }
    if (targetName === 'spend-time') {
      setFormState({ ...formState, spendTime: targetValue })
    }
    if (targetName === 'review') {
      setFormState({ ...formState, review: targetValue })
    }
    if (targetName === 'username') {
      setFormState({ ...formState, username: targetValue })
    }
    if (targetName === 'email') {
      setFormState({ ...formState, email: targetValue })
    }
    if (targetName === 'spend-time-worst') {
      setFormState({ ...formState, worstFeatures: targetValue })
    }
    if (targetName === 'bestFeatures') {
      setFormState({ ...formState, bestFeatures: targetValue })
    }
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? 'open' : ''}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>

      <section className="main__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group">
            <h3>
              {' '}
              What would you say are the best features of your rubber duck
            </h3>
            <ul>
              <li>
                <label>
                  <input
                    name="bestFeatures"
                    type="checkbox"
                    value="Yellow"
                    checked={formState.bestFeatures === 'Yellow'}
                    onChange={handleChange}
                  />{' '}
                  It's Yellow
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="bestFeatures"
                    type="checkbox"
                    value="Squeaks"
                    checked={formState.bestFeatures === 'Squeaks'}
                    onChange={handleChange}
                  />
                  It's Squeaks
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="bestFeatures"
                    type="checkbox"
                    value="logo"
                    checked={formState.bestFeatures === 'logo'}
                    onChange={handleChange}
                  />{' '}
                  It has a logo.
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="bestFeatures"
                    type="checkbox"
                    value="isBig"
                    checked={formState.bestFeatures === 'isBig'}
                    onChange={handleChange}
                  />
                  It is big
                </label>
              </li>
            </ul>

            <h3>
              {' '}
              What would you say are the worst features of your rubber duck
            </h3>
            <ul>
              <li>
                <label>
                  <input
                    name="spend-time-worst"
                    type="checkbox"
                    value="swimming"
                    checked={formState.worstFeatures === 'swimming'}
                    onChange={handleChange}
                  />{' '}
                  It's Yellow
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time-worst"
                    type="checkbox"
                    value="bathing"
                    checked={formState.worstFeatures === 'bathing'}
                    onChange={handleChange}
                  />
                  It's Squeaks
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time-worst"
                    type="checkbox"
                    value="chatting"
                    checked={formState.worstFeatures === 'chatting'}
                    onChange={handleChange}
                  />{' '}
                  It has a logo.
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time-worst"
                    type="checkbox"
                    value="noTime"
                    checked={formState.worstFeatures === 'noTime'}
                    onChange={handleChange}
                  />
                  It is big
                </label>
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck consistency?</h3>
            {/* <!-- Radio inputs go here --> */}
            <ul>
              <li>
                <input
                  id="consistency-one"
                  type="radio"
                  name="consistency"
                  value="1"
                  onChange={handleChange}
                />
                <label htmlFor="consistency-one">1</label>
              </li>
              <li>
                <input
                  id="consistency-two"
                  type="radio"
                  name="consistency"
                  value="2"
                  onChange={handleChange}
                />
                <label htmlFor="consistency-two">2</label>
              </li>
              <li>
                <input
                  id="consistency-three"
                  type="radio"
                  name="consistency"
                  value="3"
                  onChange={handleChange}
                />
                <label htmlFor="consistency-three">3</label>
              </li>
              <li>
                <input
                  id="consistency-four"
                  type="radio"
                  name="consistency"
                  value="4"
                  onChange={handleChange}
                />

                <label htmlFor="consistency-four">4</label>
              </li>
            </ul>
          </div>

          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            {/* <!-- checkboxes go here --> */}

            <ul>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    onChange={handleChange}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="bathing"
                    onChange={handleChange}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    onChange={handleChange}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="noTime"
                    onChange={handleChange}
                  />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>

          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              value={formState.comments}
              onChange={handleChange}
            ></textarea>
          </label>

          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={formState.username}
            />
          </label>

          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formState.email}
            />
          </label>

          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  )
}

export default Main
