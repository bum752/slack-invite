import React from 'react'
import axios from 'axios'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleInvite = this.handleInvite.bind(this)
  }

  handleChange(e) {
    this.setState({
      email: e.target.value
    })
  }

  handleInvite(e) {
    e.preventDefault()
    axios({
      method: 'post',
      url: '/req',
      data: {
        email: this.state.email
      }
    })
    .then((response) => {
      if(response.data.ok === true) alert('초대 메일이 발송되었습니다.')
      else {
        let error = response.data.error
        if(error === 'already_invited') alert('이미 초대된 메일입니다.')
        else if(error === 'already_in_team') alert('이미 팀에 참여 중입니다.')
        else if(error === 'user_disabled') alert('비활성화 된 계정입니다.')
        else if(error == 'invalid_email') alert('유효하지 않은 메일입니다.')
        else alert('에러가 발생했습니다')
      }
    })
    .catch((error) => {
      alert(error)
    })
  }

  render() {
    const logo = (
      <div class="col sm12 center-align">
        <img class="responsive-img" style={{maxWidth: 40 + '%'}} src="slack.png"/>
      </div>
    )
    
    const title = (
      <div class="col sm12 center-align">
        <h2><strong style={{color: 'white'}}>{process.env.SLACK_WORKSPACE}.slack.com</strong></h2>
        <h6 style={{color: 'white'}}>슬랙에 초대받기 위한 이메일 계정을 입력하세요.</h6>
      </div>
    )

    return(
      <div class="container">
        {logo}
        {title}
        <div class="row">
          <form>
            <div class="row">
              <div class="input-field col s12">
                <input class="validate" type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                <label for="email">Mail</label>
              </div>
            </div>
            <div class="row">
              <button class="btn waves-effect wave-light" type="submit" name="action" onClick={this.handleInvite}>
                Invite
                <i class="material-icons right">send</i>
                </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
