"use client"
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './components/header';
import { useEffect, useState } from 'react';
import CardComp from './components/card-comp';
import { Container, Nav, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, Spinner } from 'react-bootstrap';
import { sortStories } from "./components/utils";

export default function Home() {
  const [selected, setSelected] = useState('Latest')
  const [dropdownActiveKey, setDropdownActiveKey] = useState('1')
  const [tabActiveKey, setTabActiveKey] = useState('newstories')
  const [stories, setStories] = useState([])
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    if (stories.length > 0) {
      setLoaded(true)
    }
  }, [stories])

  useEffect(() => {
    fetchData(tabActiveKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchData = (storyType) => {
    fetch(`https://hacker-news.firebaseio.com/v0/${storyType}.json?print=pretty`).then((response) =>
      response.json()
    ).then(data => {
      getStoryInformation(data, 0, 30)
    })
  }

  const tabChanged = (eventKey, event) => {
    setStories([])
    setLoaded(false)
    setTabActiveKey(eventKey)
    fetchData(eventKey)
  }

  const storiesDropdownChange = (e, event) => {
    setDropdownActiveKey(e)
    setSelected(event.target.text);
    sortStories(e, stories)
  }

  const getStoryInformation = async (ids, from, to) => {
    var tempStories = []
    for (var i = from; i < to; i++) {
      var res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${ids[i]}.json?print=pretty`)
      var json = await res.json();
      tempStories.push(json);

    }
    setStories(sortStories(dropdownActiveKey, tempStories))
  }

  return (
    <>
      <Head />
      <Nav className="storiesNav" fill activeKey={tabActiveKey} onSelect={(ek, e) => tabChanged(ek, e)} variant="tabs">
        <NavItem>
          <NavLink eventKey='newstories'>New stories</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey='beststories'>Best stories</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey='topstories'>Top stories</NavLink>
        </NavItem>
      </Nav>
      <div className='center mt-xxl' hidden={loaded}>
        <Spinner animation='border' />
      </div>
      <Container className='pe-5 pb-5 ps-5 mb-2 mt-2'>
        {loaded ?
          <>
            <Dropdown className="mb-3 max-content" onSelect={(e, event) => storiesDropdownChange(e, event)}>
              <DropdownToggle className="max-content" variant="secondary">Sort by: {selected}</DropdownToggle>
              <DropdownMenu className="max-content">
                <DropdownItem eventKey='1'>Latest</DropdownItem>
                <DropdownItem eventKey='2'>Oldest</DropdownItem>
                <DropdownItem eventKey='3'>Votes: low - high</DropdownItem>
                <DropdownItem eventKey='4'>Votes: high - low</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            {stories.map((story, i) =>
              <CardComp key={story.id} index={i} data={story} />

            )}
          </> : ''}
      </Container>
    </>
  )
}
