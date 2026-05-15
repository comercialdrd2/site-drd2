const fs = require('fs');
const path = require('path');

const filesToFix = [
  "avcb-vila-leopoldina/page.tsx",
  "avcb-vila-madalena/page.tsx",
  "avcb-vila-prudente/page.tsx",
  "avcb-bela-vista/page.tsx"
];

for (const file of filesToFix) {
  const filePath = path.join("src/app", file);
  if (!fs.existsSync(filePath)) {
    console.log("Not found: " + filePath);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Fix the BreadcrumbNav bracket indentation (usually 4 spaces instead of 8)
  content = content.replace(/(\n)    \]\}(\n        dark\n      \/>)/g, "$1        ]}$2");

  // 2. Fix the extra div in the hero section.
  // The hero section ends with 4 divs and a </section>. We want 3 divs.
  const badHeroEnd = `              </div>
            </div>
          </div>
          </div>
        </div>
      </section>`;
  
  const goodHeroEnd = `              </div>
            </div>
          </div>
      </section>`;

  // A different variation with 4 closing divs
  const badHeroEnd2 = `              </div>
            </div>
          </div>
        </div>
      </section>`;
      
  const goodHeroEnd2 = `              </div>
            </div>
          </div>
      </section>`;

  content = content.replace(badHeroEnd, goodHeroEnd);
  content = content.replace(badHeroEnd2, goodHeroEnd2);

  // 3. Fix the missing div in Authority Section
  // Find where authority section closes
  const badAuthorityEnd = `              </div>
            </div>
          </div>
      </section>

      {/* Services Grid */}`;
  
  const goodAuthorityEnd = `              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}`;
      
  const badAuthorityEnd2 = `                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Services Grid */}`;

  const goodAuthorityEnd2 = `                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}`;

  content = content.replace(badAuthorityEnd, goodAuthorityEnd);
  content = content.replace(badAuthorityEnd2, goodAuthorityEnd2);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Fixed: " + filePath);
}
