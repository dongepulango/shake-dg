import React, { useState } from 'react';
import { RouteComponentProps, NavLink } from 'react-router-dom';
//styles
import styled from 'styled-components';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../redux/store';
//import { incrementOne, decrementOne } from '../redux/actions/sample';
//components
import PageFade from '../components/ui/PageFade';
import Header from '../components/ui/Header';
import Navigation from '../components/ui/Navigation';
import WithSubNav from '../components/ui/WithSubNav';
import SubNavigation from '../components/ui/SubNavigation';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Option from '../components/ui/Option';
import SelectDropdown from '../components/ui/SelectDropdown';
import Dropdown from '../components/ui/Dropdown';
import Tooltip from '../components/ui/Tooltip';
import InfoBlock from '../components/ui/InfoBlock';
import { Tabs, TabItem } from '../components/ui/Tabs';
//assets
import googleIcon from '../assets/images/icon-google.svg';
import OptionIcon from '../assets/images/bb-icon.png';

//styled
const UserFeedbackWrap = styled.div`
  position: relative;
  padding-bottom: 60px; //temp
`;

const UserFeedbackContent = styled.div`
  .demo {
    > * {
      &:not(:last-child) {
        margin-bottom: 30px;
      }
    }
  }
`;

const UserFeedback: React.FC<RouteComponentProps> = (): JSX.Element => {

  const dispatch = useDispatch();
  const counter = useSelector((state: ReduxState) => state.sample.counter);

  //options
  const options = [
    {
      value: 'member',
      label: <div dangerouslySetInnerHTML={{
        __html: `
        <h4>Member</h4>
        <p>A member can see everything within this workspace.</p>
      `}} />
    },
    {
      value: 'member',
      label: <div dangerouslySetInnerHTML={{
        __html: `
        <h4>Admin</h4>
        <p>All permissions, including the ability to archive apps, remove teammates and so on.</p>
      `}} />
    },
  ];
  //dropdown
  const dropdown = [
    {
      value: 'Dropdown 1',
      label: 'Dropdown 1',
    },
    {
      value: 'Dropdown 2',
      label: 'Dropdown 2',
    },
    {
      value: 'Dropdown 3',
      label: 'Dropdown 3',
    },
  ];

  //
  const tabs = [
    {
      id: 1,
      name: 'General'
    },
    {
      id: 2,
      name: 'White labeling'
    },
    {
      id: 3,
      name: 'Teams'
    },
    {
      id: 4,
      name: 'Environments'
    },
  ];

  //tab state
  const [tabState, setTabState] = useState<number>(1);

  //change tab
  const changeTab = (id) => {
    setTabState(id);
  };

  return (
    <PageFade>
      <UserFeedbackWrap>
        <Header>
          <Navigation />
        </Header>
        <WithSubNav>
          <SubNavigation links={tabs} activeTab={tabState} changeTab={changeTab} />
          <UserFeedbackContent>
            <Tabs>
              <TabItem currentTab={tabState} id={1}>
                <Card>
                  <Heading as="h1" heading1>This is h1 Off white color</Heading>
                  <Heading as="h2" heading2>This is h2 in all its glory, it also splits into two lines just for fun</Heading>
                  <Heading as="h3" heading3>h3 has its own thing and looks like this</Heading>
                  <p>LThis is a "normal paragraph" text and it's Grey 40. Click this link to confirm your address and get started. You can also have multiple paragraphs.</p>
                  <p className="small">This would be "small text" style and it's Grey 60. <a href="#">This is hyperlink Greey 40</a> today and <a href="#">hyperlink hover</a>. Haven't received the email? Check the Spam folder.</p>
                  <p className="tiny">This "tiny text" in Grey 60 used for tiny things like timestamps</p>

                  <div className="demo">
                    <p><Tooltip text="Hover on me" tip="Wonderboy, what is the secret of your power?" /> for Tooltip demo.</p>

                    <InfoBlock>A Shake workspace is a private hub where you and your team members work together on projects. At any given moment, you can be a member of as many workspaces as you want, create, join and leave them.</InfoBlock>

                    <Button>Regular Button</Button>
                    <br />
                    <Button small>Small Button</Button>
                    <br />
                    <Button extraSmall>Extra Small</Button>
                    <br />
                    <Button extraSmall red>Red</Button>
                    <br />
                    <Button disabled>Disabled Button</Button>
                    <br />
                    <Button full>Full Width Button</Button>

                    <Button full withIcon><img src={googleIcon} alt="icon" /> Button With Icon</Button>

                    <Button full outline>Outline button</Button>

                    <SelectDropdown options={options} defaultValue={options[0]} placeholder="Placeholder Text" label="Role" />

                    <Dropdown options={dropdown} defaultValue={dropdown[0]} />

                    <Input
                      type="text"
                      placeholder="Placeholder text"
                      label="Workspace name"
                      helper="Extra notes to give user any required context. Workspace name is usually the name of your company or team, but you can be informal too"
                    />

                    <Input
                      type="text"
                      placeholder="Placeholder text"
                      label="Workspace name"
                      value="Filip Justic is a multi award winning designer bro"
                      helper="Whoopsie, that doesn't look like a valid name"
                      error
                    />

                    <Option checked={true} label="Option label text" />

                    <Option checked={false} label="Option with Icon" icon={OptionIcon} />

                    {/* <Button onClick={() => dispatch(incrementOne)}>Increment</Button>&nbsp;&nbsp;
                      <Button onClick={() => dispatch(decrementOne)}>Decrement</Button>
                      <br />
                      <br />
                      <p>Current Count: {counter}</p> */}
                  </div>

                </Card>
              </TabItem>
              <TabItem currentTab={tabState} id={2}>
                <Card>
                  <Heading as="h2" heading1 marginBottom="8px">White labeling</Heading>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, quasi dolorum officiis officia laborum amet maxime aut quos? Officiis magni voluptatibus at aperiam eum vel soluta ex quos. Eius, delectus.</p>
                </Card>
              </TabItem>
              <TabItem currentTab={tabState} id={3}>
                <Card>
                  <Heading as="h2" heading1 marginBottom="8px">Teams</Heading>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, quasi dolorum officiis officia laborum amet maxime aut quos? Officiis magni voluptatibus at aperiam eum vel soluta ex quos. Eius, delectus.</p>
                </Card>
              </TabItem>
              <TabItem currentTab={tabState} id={4}>
                <Card>
                  <Heading as="h2" heading1 marginBottom="8px">Environments</Heading>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, quasi dolorum officiis officia laborum amet maxime aut quos? Officiis magni voluptatibus at aperiam eum vel soluta ex quos. Eius, delectus.</p>
                </Card>
              </TabItem>
            </Tabs>
          </UserFeedbackContent>
        </WithSubNav>
      </UserFeedbackWrap>
    </PageFade>
  );
};

export default UserFeedback;