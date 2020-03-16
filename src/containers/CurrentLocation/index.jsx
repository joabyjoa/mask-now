import React, { Component } from 'react'

class CurrentLocation extends Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: false, position: [] }
  }
  getPosition = () => {
    try {
      navigator.geolocation.getCurrentPosition(position => {
        let { latitude, longitude } = position.coords
        this.setState({
          isLoading: false,
          position: [latitude, longitude],
        })
      })
    } catch (e) {
      console.log(e)
    }
  }
  componentDidMount() {
    this.setState({ isLoading: true })
    this.getPosition()
  }

  render() {
    const { isLoading } = this.state

    if (isLoading) {
      return <p>현재위치를 확인하는중입니다...</p>
    }
  }
}

export default CurrentLocation
