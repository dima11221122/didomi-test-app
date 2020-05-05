'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">didomi-test-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppMockModule.html" data-type="entity-link">AppMockModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-5e20f7b69c1bcbd22ff894f7aafc9c31"' : 'data-target="#xs-components-links-module-AppModule-5e20f7b69c1bcbd22ff894f7aafc9c31"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-5e20f7b69c1bcbd22ff894f7aafc9c31"' :
                                            'id="xs-components-links-module-AppModule-5e20f7b69c1bcbd22ff894f7aafc9c31"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainAreaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainAreaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CollectedConsentsModule.html" data-type="entity-link">CollectedConsentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CollectedConsentsModule-a90595d8a60bff28458d473b409f2a7f"' : 'data-target="#xs-components-links-module-CollectedConsentsModule-a90595d8a60bff28458d473b409f2a7f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CollectedConsentsModule-a90595d8a60bff28458d473b409f2a7f"' :
                                            'id="xs-components-links-module-CollectedConsentsModule-a90595d8a60bff28458d473b409f2a7f"' }>
                                            <li class="link">
                                                <a href="components/CollectedConsentsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CollectedConsentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaginationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaginationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaginationControllerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaginationControllerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaginationPagesPanelComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaginationPagesPanelComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-CollectedConsentsModule-a90595d8a60bff28458d473b409f2a7f"' : 'data-target="#xs-pipes-links-module-CollectedConsentsModule-a90595d8a60bff28458d473b409f2a7f"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-CollectedConsentsModule-a90595d8a60bff28458d473b409f2a7f"' :
                                            'id="xs-pipes-links-module-CollectedConsentsModule-a90595d8a60bff28458d473b409f2a7f"' }>
                                            <li class="link">
                                                <a href="pipes/StringifyConsentPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StringifyConsentPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CollectedConsentsRoutingModule.html" data-type="entity-link">CollectedConsentsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GiveConsentModule.html" data-type="entity-link">GiveConsentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GiveConsentModule-1cbb4d39673f84f68bf782ba6a8fcc1f"' : 'data-target="#xs-components-links-module-GiveConsentModule-1cbb4d39673f84f68bf782ba6a8fcc1f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GiveConsentModule-1cbb4d39673f84f68bf782ba6a8fcc1f"' :
                                            'id="xs-components-links-module-GiveConsentModule-1cbb4d39673f84f68bf782ba6a8fcc1f"' }>
                                            <li class="link">
                                                <a href="components/GiveConsentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GiveConsentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GiveConsentFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GiveConsentFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GiveConsentRoutingModule.html" data-type="entity-link">GiveConsentRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CollectedConsentsService.html" data-type="entity-link">CollectedConsentsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConsentsEffects.html" data-type="entity-link">ConsentsEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConsentsManagementEffects.html" data-type="entity-link">ConsentsManagementEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConsentsManagementService.html" data-type="entity-link">ConsentsManagementService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConsentsService.html" data-type="entity-link">ConsentsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PagesPanelGeneratorService.html" data-type="entity-link">PagesPanelGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TableHandlerService.html" data-type="entity-link">TableHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UiEffects.html" data-type="entity-link">UiEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UiService.html" data-type="entity-link">UiService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/ShowLoaderInterceptor.html" data-type="entity-link">ShowLoaderInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/ConsentsResolverService.html" data-type="entity-link">ConsentsResolverService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ActivePageNumberItem.html" data-type="entity-link">ActivePageNumberItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CollectedConsentsState.html" data-type="entity-link">CollectedConsentsState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Consent.html" data-type="entity-link">Consent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConsentsManagementState.html" data-type="entity-link">ConsentsManagementState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConsentsState.html" data-type="entity-link">ConsentsState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GiveConsentState.html" data-type="entity-link">GiveConsentState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NumberPageItem.html" data-type="entity-link">NumberPageItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PlaceholderPageItem.html" data-type="entity-link">PlaceholderPageItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SharedState.html" data-type="entity-link">SharedState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UiState.html" data-type="entity-link">UiState</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});