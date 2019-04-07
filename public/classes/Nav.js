class Nav {
    constructor() {
        this.commonLinks = [
            {
            text: "Search",
            to: "../htmlPages/search.html"
        }];
        this.authLinks = [
            {
                text: "Cart",
                to: "../htmlPages/cart.html"
            },
            {
                text: "Profile",
                to: "../htmlPages/profile.html"
            }];
        this.noAuthLinks = [
            {
                text: "Sign in",
                to: "../htmlPages/signIn.html"
            },
            {
                text: "Sign up",
                to: "../htmlPages/signUp.html"
            }];
    }

    buildLinks(link) {
        debugger;
        let newLinkLi = $("<li>", {
            class: "linkContainer",
        });
        let newLinkA = $("<a>", {
            class: "linkTag",
            text: link.text,
        });
        let att = document.createAttribute("href");
        att.value = `${link.to}`;
        newLinkA[0].setAttributeNode(att);
        newLinkLi.append(newLinkA);
        newLinkLi.appendTo($(".navContainer"));
    }

    createLinks() {
        let auth = false;
        if(auth) {
            let links = this.commonLinks.concat(this.authLinks);
            links.map(this.buildLinks);
        } else {
            let links = this.commonLinks.concat(this.noAuthLinks);
            links.map(this.buildLinks);
        }
    }
}
