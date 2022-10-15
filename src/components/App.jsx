import { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Box } from 'Box';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    // console.log(event.currentTarget.textContent);
    const option = event.currentTarget.textContent;

    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return Math.round((good / totalFeedback) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;

    return (
      <ThemeProvider theme={theme}>
        <Box
          width={500}
          mt={5}
          mr={9}
          ml={9}
          pt={4}
          pb={4}
          pl={4}
          boxShadow="boxShadow"
        >
          <Section title={<h1>Please leave feedback</h1>}>
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onLeaveFeedback}
            ></FeedbackOptions>
          </Section>

          <Section title={<h2>Statistics</h2>}>
            {totalFeedback > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="There is no feedback." />
            )}
          </Section>
        </Box>
      </ThemeProvider>
    );
  }
}
