<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <xsl:output method="html" version="5.0" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>XML Sitemap — Moroccan Mate</title>
        <style>
          :root {
            --bg: #faf7f2;
            --card: #ffffff;
            --border: #e6dccb;
            --ink: #142333;
            --muted: #665d52;
            --gold: #c9a84c;
            --gold-soft: #f7f1e1;
            --accent: #b85d38;
          }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, sans-serif;
            background: var(--bg);
            color: var(--ink);
            line-height: 1.5;
          }
          .header {
            background: #142333;
            color: #faf7f2;
            padding: 28px 24px;
            border-bottom: 3px solid var(--gold);
          }
          .container {
            max-width: 1180px;
            margin: 0 auto;
          }
          .header-top {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
          }
          h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 700;
            letter-spacing: -0.02em;
          }
          .subtitle {
            margin: 6px 0 0;
            font-size: 14px;
            color: #d6cebf;
          }
          .back-link {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 8px 14px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.1);
            color: #faf7f2;
            text-decoration: none;
            font-size: 13px;
            font-weight: 600;
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          .back-link:hover {
            background: rgba(255, 255, 255, 0.18);
          }
          .main {
            padding: 24px;
          }
          .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
            gap: 12px;
            margin-bottom: 18px;
          }
          .stat-card {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 14px;
            padding: 14px 16px;
          }
          .stat-label {
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            color: var(--muted);
          }
          .stat-value {
            margin-top: 4px;
            font-size: 22px;
            font-weight: 800;
            color: var(--ink);
            font-variant-numeric: tabular-nums;
          }
          .toolbar {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 14px;
            padding: 12px 16px;
            margin-bottom: 16px;
          }
          .search-input {
            flex: 1 1 260px;
            padding: 9px 12px;
            border: 1px solid var(--border);
            border-radius: 10px;
            font-size: 14px;
            color: var(--ink);
            background: #fdfbf7;
            outline: none;
          }
          .search-input:focus {
            border-color: var(--gold);
          }
          .filters {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
          }
          .filter-btn {
            border: 1px solid var(--border);
            background: #fdfbf7;
            color: var(--muted);
            padding: 7px 12px;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
          }
          .filter-btn.active {
            background: #142333;
            color: #ffffff;
            border-color: #142333;
          }
          .table-wrap {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 16px;
            overflow-x: auto;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
          }
          thead th {
            text-align: left;
            padding: 12px 14px;
            background: #f6f0e6;
            color: var(--ink);
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border-bottom: 1px solid var(--border);
          }
          tbody td {
            padding: 10px 14px;
            border-bottom: 1px solid #f2ebe0;
            vertical-align: middle;
          }
          tbody tr:hover {
            background: #fdfaf4;
          }
          .url-link {
            color: #142333;
            font-weight: 600;
            text-decoration: none;
            word-break: break-all;
          }
          .url-link:hover {
            color: var(--accent);
            text-decoration: underline;
          }
          .badge {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 11px;
            font-weight: 700;
            background: var(--gold-soft);
            color: #7c5f12;
            white-space: nowrap;
          }
          .badge-muted {
            background: #f1eee9;
            color: #5b5349;
          }
          .num {
            font-variant-numeric: tabular-nums;
            white-space: nowrap;
            color: var(--muted);
          }
          .empty-note {
            display: none;
            padding: 24px;
            text-align: center;
            color: var(--muted);
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <header class="header">
          <div class="container header-top">
            <div>
              <h1>Moroccan Mate — XML Sitemap</h1>
              <p class="subtitle">
                Search-engine XML sitemap covering multilingual hubs, category &amp; intent guides, verified places, restaurant menus, and activities.
              </p>
            </div>
            <a class="back-link" href="/">Back to Home</a>
          </div>
        </header>

        <main class="main container">
          <div class="stats">
            <div class="stat-card">
              <div class="stat-label">Total Indexable URLs</div>
              <div class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url)" /></div>
            </div>
            <div class="stat-card">
              <div class="stat-label">Places &amp; Menus</div>
              <div class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url[contains(sitemap:loc, '/place/')])" /></div>
            </div>
            <div class="stat-card">
              <div class="stat-label">Browse &amp; Intents</div>
              <div class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url[contains(sitemap:loc, '/finder/')])" /></div>
            </div>
            <div class="stat-card">
              <div class="stat-label">Things To Do</div>
              <div class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url[contains(sitemap:loc, '/things/')])" /></div>
            </div>
            <div class="stat-card">
              <div class="stat-label">Image URLs</div>
              <div class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url/image:image)" /></div>
            </div>
          </div>

          <div class="toolbar">
            <input id="sitemap-search" class="search-input" type="search" placeholder="Filter URLs (e.g. agadir, blog, privacy, terms, /fr/)..." />
            <div class="filters">
              <button type="button" class="filter-btn active" data-filter="all">All</button>
              <button type="button" class="filter-btn" data-filter="finder">Browse &amp; Intents</button>
              <button type="button" class="filter-btn" data-filter="place">Places</button>
              <button type="button" class="filter-btn" data-filter="menu">Menus</button>
              <button type="button" class="filter-btn" data-filter="things">Things To Do</button>
              <button type="button" class="filter-btn" data-filter="blog">Blog</button>
              <button type="button" class="filter-btn" data-filter="info">Info &amp; Legal</button>
            </div>
          </div>

          <div class="table-wrap">
            <table id="sitemap-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>URL</th>
                  <th>Type</th>
                  <th>Hreflang</th>
                  <th>Images</th>
                  <th>Priority</th>
                  <th>Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <xsl:variable name="loc" select="sitemap:loc" />
                  <xsl:variable name="relPath">
                    <xsl:choose>
                      <xsl:when test="contains($loc, 'https://www.moroccanmate.com')">
                        <xsl:value-of select="substring-after($loc, 'https://www.moroccanmate.com')" />
                      </xsl:when>
                      <xsl:otherwise>
                        <xsl:value-of select="$loc" />
                      </xsl:otherwise>
                    </xsl:choose>
                  </xsl:variable>
                  <xsl:variable name="rowType">
                    <xsl:choose>
                      <xsl:when test="contains($loc, '/menu')">menu</xsl:when>
                      <xsl:when test="contains($loc, '/place/')">place</xsl:when>
                      <xsl:when test="contains($loc, '/things/')">things</xsl:when>
                      <xsl:when test="contains($loc, '/finder')">finder</xsl:when>
                      <xsl:when test="contains($loc, '/blog')">blog</xsl:when>
                      <xsl:when test="contains($loc, '/about') or contains($loc, '/contact') or contains($loc, '/privacy') or contains($loc, '/terms')">info</xsl:when>
                      <xsl:otherwise>home</xsl:otherwise>
                    </xsl:choose>
                  </xsl:variable>
                  <tr data-type="{$rowType}" data-url="{$loc}">
                    <td class="num"><xsl:value-of select="position()" /></td>
                    <td>
                      <a class="url-link" href="{$relPath}">
                        <xsl:value-of select="$loc" />
                      </a>
                    </td>
                    <td>
                      <span class="badge"><xsl:value-of select="$rowType" /></span>
                    </td>
                    <td class="num">
                      <xsl:choose>
                        <xsl:when test="count(xhtml:link) &gt; 0">
                          <span class="badge badge-muted"><xsl:value-of select="count(xhtml:link)" /> alternates</span>
                        </xsl:when>
                        <xsl:otherwise>en</xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td class="num">
                      <xsl:choose>
                        <xsl:when test="count(image:image) &gt; 0">
                          <details>
                            <summary style="cursor:pointer;">
                              <span class="badge"><xsl:value-of select="count(image:image)" /> images</span>
                            </summary>
                            <div style="margin-top:6px;display:flex;flex-direction:column;gap:3px;font-size:11px;">
                              <xsl:for-each select="image:image">
                                <a class="url-link" href="{image:loc}">
                                  <xsl:value-of select="image:loc" />
                                </a>
                              </xsl:for-each>
                            </div>
                          </details>
                        </xsl:when>
                        <xsl:otherwise>—</xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td class="num"><xsl:value-of select="sitemap:priority" /></td>
                    <td class="num"><xsl:value-of select="sitemap:lastmod" /></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
            <div id="empty-note" class="empty-note">No matching sitemap URLs found.</div>
          </div>
        </main>

        <script>
          (function () {
            var search = document.getElementById('sitemap-search');
            var buttons = document.querySelectorAll('.filter-btn');
            var rows = document.querySelectorAll('#sitemap-table tbody tr');
            var emptyNote = document.getElementById('empty-note');
            var activeFilter = 'all';

            function applyFilters() {
              var q = (search.value || '').toLowerCase().trim();
              var visible = 0;
              for (var i = 0; i &lt; rows.length; i++) {
                var row = rows[i];
                var type = row.getAttribute('data-type') || '';
                var url = (row.getAttribute('data-url') || '').toLowerCase();
                var matchType = activeFilter === 'all' || type === activeFilter;
                var matchQuery = !q || url.indexOf(q) !== -1;
                var show = matchType &amp;&amp; matchQuery;
                row.style.display = show ? '' : 'none';
                if (show) visible++;
              }
              emptyNote.style.display = visible === 0 ? 'block' : 'none';
            }

            search.addEventListener('input', applyFilters);
            for (var j = 0; j &lt; buttons.length; j++) {
              buttons[j].addEventListener('click', function () {
                for (var k = 0; k &lt; buttons.length; k++) {
                  buttons[k].classList.remove('active');
                }
                this.classList.add('active');
                activeFilter = this.getAttribute('data-filter') || 'all';
                applyFilters();
              });
            }
          })();
        </script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
