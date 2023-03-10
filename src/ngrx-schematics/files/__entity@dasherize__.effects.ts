import { Injectable } from '@angular/core';
import { } from '@graphql';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { GraphQLNormalizr } from 'graphql-normalizr';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import {
    get<%=classify(entity)%>,
    get<%=classify(entity)%>Successfully
} from './<%=entity%>.actions';

const { normalize } = new GraphQLNormalizr({
    lists: true
});

@Injectable()
export class <%=classify(entity)%>Effects {

    constructor(
        private actions$: Actions,
        private get<%=classify(entity)%>GQL: /**TODO: Your query service injection here */
    ) {}

    get<%=classify(entity)%>$: Observable<Action> = createEffect(() => this.actions$
        .pipe(
            ofType(get<%=classify(entity)%>),
            tap( _ => { /** Make stuff before make the call without affecting the flow.*/ }),
            switchMap( () => this.get<%=classify(entity)%>GQL.fetch(null, {fetchPolicy: 'network-only'})),
            tap( _ => { /** Make stuff after get the call response without affecting the flow.*/ }),
            switchMap((res) => {
                const normalizedResponse = normalize(res);
                const { <%=entity%> = [] /** Destruct more entities from the response */ } = normalizedResponse;

                return [
                    get<%=classify(entity)%>Successfully({ <%=entity%> })
                ];
            })
        )
    );

}