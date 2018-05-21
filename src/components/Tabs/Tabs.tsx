import * as React from "react";
import { MenuTabs } from "./MenuTabs";

interface Props {

}

interface LocalState {
    activeTab: number
}

export class Tabs extends React.Component<Props, LocalState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            activeTab: MenuTabs.HOME
        }
        this.handleSelectedTab = this.handleSelectedTab.bind(this);
    }

    private handleSelectedTab =(index: number) => {
        this.setState({
            activeTab: index
        })
    }

    render() {
        return (
            <div className="mainTab">
                <span className={`subTab ${this.state.activeTab === MenuTabs.HOME ? "selected-tab": ""}`}>
                    <label className="label" onClick={() => this.handleSelectedTab(MenuTabs.HOME)}>Home</label>
                </span>
                <span className={`subTab ${this.state.activeTab === MenuTabs.ABOUT ? "selected-tab": ""}`}>
                    <label className="label" onClick={() => this.handleSelectedTab(MenuTabs.ABOUT)}>About</label>
                </span>
                <span className={`subTab ${this.state.activeTab === MenuTabs.MENU ? "selected-tab": ""}`}>
                    <label className="label" onClick={() => this.handleSelectedTab(MenuTabs.MENU)}>Menu</label>
                </span>
                <span className={`subTab ${this.state.activeTab === MenuTabs.GALLERY ? "selected-tab": ""}`}>
                    <label className="label" onClick={() => this.handleSelectedTab(MenuTabs.GALLERY)}>Gallery</label>
                </span>
                <span className={`subTab ${this.state.activeTab === MenuTabs.REGISTER ? "selected-tab": ""}`}>
                    <label className="label" onClick={() => this.handleSelectedTab(MenuTabs.REGISTER)}>Register</label>
                </span>
                <span className={`subTab ${this.state.activeTab === MenuTabs.LOGIN ? "selected-tab": ""}`}>
                    <label className="label" onClick={() => this.handleSelectedTab(MenuTabs.LOGIN)}>Login</label>
                </span>
            </div>
        );
    }
}