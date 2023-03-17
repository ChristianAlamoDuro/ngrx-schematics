import { strings } from "@angular-devkit/core";
import {
  apply,
  mergeWith,
  Rule,
  SchematicContext,
  template,
  Tree,
  url,
  move,
} from "@angular-devkit/schematics";
import * as pluralize from "pluralize";

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function ngrxSchematics(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const sourceTemplates = url("./files");
    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ..._options,
        pluralize,
        ...strings,
      }),
      move(`/src/app/core/store/${_options.entity}`),
    ]);

    return mergeWith(sourceParametrizedTemplates)(tree, _context);
  };
}
