import { Injectable } from '@angular/core';
import { GraphQLNormalizr } from 'graphql-normalizr';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { tap, switchMap } from 'rxjs/operators';
import {
    get<%=pluralize(classify(entity))%>,
    get<%=pluralize(classify(entity))%>Successfully
} from './<%=entity%>.actions';

const { normalize } = new GraphQLNormalizr({
    lists: true
});

@Injectable()
export class <%=classify(entity)%>Effects {

    constructor(
        private actions$: Actions,
    ) {}

    get<%=pluralize(classify(entity))%>$: Observable<Action> = createEffect(() => this.actions$
        .pipe(
            ofType(get<%=pluralize(classify(entity))%>),
            switchMap( () => this.get<%=pluralize(classify(entity))%>GQL.fetch(null, {fetchPolicy: 'network-only'})),
            switchMap((res) => {
                const normalizedResponse = normalize(res);
                const { <%=pluralize(entity)%> = []  } = normalizedResponse;

                return [
                    get<%=pluralize(classify(entity))%>Successfully({ <%=pluralize(entity)%> })
                ];
            })
        )
    );

}